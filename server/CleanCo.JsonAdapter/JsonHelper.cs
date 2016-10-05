using Newtonsoft.Json;

namespace CleanCo.JsonAdapter
{
    public static class JsonHelper<T>
    {
        public static string ToJson(T obj)
        {
            return JsonConvert.SerializeObject(obj);
        }

        public static T FromJson(string json)
        {
            return JsonConvert.DeserializeObject<T>(json);
        }
    }
    
}