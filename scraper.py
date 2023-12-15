# pip install requests
import requests

url = 'https://lasvegas.craigslist.org/search/cps#search=1~thumb~0~0'
apikey = '6a9699315b0dd29d15188930988bffbebfab750f'
params = {
    'url': url,
    'apikey': apikey,
}
response = requests.get('https://api.zenrows.com/v1/', params=params)
print(response.text)
