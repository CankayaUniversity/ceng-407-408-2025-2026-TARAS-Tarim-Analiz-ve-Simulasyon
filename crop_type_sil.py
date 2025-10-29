import pandas as pd

# Google Sheets bağlantısı
sheet_url = "https://docs.google.com/spreadsheets/d/1Nn4e1JoMIfBeBgobYglhj-yE7-l3q-Qe4gnmgUcQ2AU/edit?usp=drive_link"

# CSV formatında okunabilir hale getiriyoruz
csv_export_url = sheet_url.replace("/edit?usp=drive_link", "/gviz/tq?tqx=out:csv")

# Google Sheets'ten doğrudan oku
df = pd.read_csv(csv_export_url)

# İlk 5 satırı yazdır
print(df.head())
