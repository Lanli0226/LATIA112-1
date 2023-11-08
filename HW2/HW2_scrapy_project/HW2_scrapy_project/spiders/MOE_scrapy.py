import scrapy

class MOE_scrapy(scrapy.Spider):
    name = 'MOE_scrapy'
    allowed_domains = ['depart.moe.edu.tw']
    start_urls = ['https://depart.moe.edu.tw/']
    def parse(self, response):
        # 使用 XPath 選擇器提取連結與名稱
        link_selector = response.xpath('//tr/td/div/div/ol/li/a/@href')
        name_selector = response.xpath('//tr/td/div/div/ol/li/a/text()')
        # 想取得資料的 XPath
        # /html/body/form/div[1]/div[9]/div/div[3]/div[4]/div[3]/div/table/tbody/tr[2]/td/div/div[1]/ol[1]/li[1]/a
        # /html/body/form/div[1]/div[9]/div/div[3]/div[4]/div[3]/div/table/tbody/tr[2]/td/div/div[2]/ol[1]/li[1]/a

        link = link_selector.extract()
        name = name_selector.extract()
        
        data = list(zip(name, link))

        import csv

        with open('統計處_統計表快速查詢.csv', 'w', newline='', encoding='utf-8') as csvfile:
            csv_writer = csv.writer(csvfile)
            # 在first row 加入 Name 、 Link
            csv_writer.writerow(['Name', 'Link'])
            csv_writer.writerows(data)