using Elasticsearch.Net;
using Nest;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace N5Company.Security.Elasticsearch
{
    public class Elasticsearch
    {
        private string _indexName { get; set; }
        private readonly IElasticClient _client;

        public Elasticsearch(IElasticClient client, string indexName)
        {
            _client = client;
            _indexName = indexName;
        }

        public Elasticsearch Index(string indexName)
        {
            _indexName = indexName;
            return this;
        }
        public async Task CreateIndexIfNotExists(string indexName)
        {
            if (!_client.Indices.Exists(indexName).Exists)
            {
                await _client.Indices.CreateAsync(indexName, c => c.Map<dynamic>(m => m.AutoMap()));
            }
            Index(indexName);
        }
      
        public async Task<T> Get<T>(string key) where T : class
        {
            var response = await _client.GetAsync<T>(key, g => g.Index(_indexName));
            return response.Source;
        }
        public async Task<List<T>?> GetAll<T>() where T : class
        {
            var searchResponse = await _client.SearchAsync<T>(s => s.Index(_indexName).Query(q => q.MatchAll()));
            return searchResponse.IsValid ? searchResponse.Documents.ToList() : default;
        }
        public async Task<List<T>?> Query<T>(QueryContainer predicate) where T : class
        {
            var searchResponse = await _client.SearchAsync<T>(s => s.Index(_indexName).Query(q => predicate));
            return searchResponse.IsValid ? searchResponse.Documents.ToList() : default;
        }
    }
}
