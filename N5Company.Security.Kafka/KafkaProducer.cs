using Confluent.Kafka;
using Newtonsoft.Json;

namespace N5Company.Security.Kafka
{
    public static class KafkaProducer
    {

        public static async Task SendMessage(string topic, string message)
        {
            //for external use: localhost:29092
            var config = new ProducerConfig { BootstrapServers = "broker:9092" };

            using (var p = new ProducerBuilder<Null, string>(config).Build())
            {
                try
                {
                    var dr = await p.ProduceAsync(topic, new Message<Null, string> { Value = message });

                }
                catch (ProduceException<Null, string> e)
                {
                    Console.WriteLine($"Delivery failed: {e.Error.Reason}");
                }
            }
        }
    }
}
