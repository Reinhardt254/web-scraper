# pip install requests
import requests

url = WEBSITELINK;

apikey = APIKEY;

params = {
    'url': url,
    'apikey': apikey,
}
response = requests.get('https://api.zenrows.com/v1/', params=params)
print(response.text)
