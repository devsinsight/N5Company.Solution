using Newtonsoft.Json;

namespace N5Company.Security.Kafka
{
    public static class N5CompanyBroker
    {
        public static async Task SendOperation(string operation)
        {
            await KafkaProducer.SendMessage("n5company-events", JsonConvert.SerializeObject(new { Id = Guid.NewGuid(), Operation = operation }));
        }

        public static async Task SendEvent(object o)
        {
            await KafkaProducer.SendMessage("permission", JsonConvert.SerializeObject(o));
        }
    }
}
