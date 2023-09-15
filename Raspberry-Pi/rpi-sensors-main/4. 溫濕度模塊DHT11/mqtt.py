import paho.mqtt.client as mqtt
import time
import sample1


mqtt_broker = "mqtt.192.168.168.101"
mqtt_port = 1883

client = mqtt.Client()

def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("Connected to MQTT Broker")
    else:
        print(f"Connection faild with code{rc}")
    

def on_message(client,userdata,msg):
    print(f"Received messge on topic {msg.topic}: {msg.payload.decode()}")



client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

def publish_message(mqtt_broker, mqtt_port, topic, message):
    try:
        # temperature = shared_variables.temperature
        # humidity = shared_variables.humidity
        temperature, humidity = sample1.start()
        client.connect(mqtt_broker, mqtt_port, 60)
        message = f"溫度：{temperature}C，濕度：{humidity}%"
        client.publish(topic, message)
        client.disconnect()
        print("正確發送訊息:", topic)
    except Exception as e:
        print("未正確發送訊息:", str(e))

if __name__ == "__main__":
    topic = "joy/test"
    message = "Test message"
    publish_message(mqtt_broker, mqtt_port, topic, message)

mqtt_server_ip="192.168.168.101"
mqtt_port = 1883
mqtt_keepalive_interval = 60
client.connect(mqtt_server_ip,mqtt_port,mqtt_keepalive_interval)
client.subscribe("joy/test")
       