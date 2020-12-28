import axios from 'axios';

describe('learn axios and weather api', function() {
    test('get 1st store selling taiwan original pork', async () => {
        let porkTaggings;
        porkTaggings = (await axios.get('https://data.coa.gov.tw/Service/OpenData/DataFileService.aspx?UnitId=H76')).data;

        expect(porkTaggings[0].market_name).toEqual('究挑食松南店');
        expect(porkTaggings[0].Lontitude).toEqual('121.532336');
        expect(porkTaggings[0].type).toEqual('餐飲');
        expect(porkTaggings[0].badge_code).toEqual('B000001');
    });

    test('check if given stors sells the taiwan original pork', async() => {
        let storeDictionary = {};
        let porkTaggings;
        porkTaggings = (await axios.get('https://data.coa.gov.tw/Service/OpenData/DataFileService.aspx?UnitId=H76')).data;

        porkTaggings.forEach(store => {
            storeDictionary[store.market_name] = store;
        });

        expect(storeDictionary['American Pork']).toBeUndefined();

        expect(storeDictionary['豬市大吉']).not.toBeNull();
        expect(storeDictionary['豬市大吉'].addr).toBe('新北市三重區重新路2段13巷17號1樓');

        let store = storeDictionary['鬍鬚張台北華山店'];
        expect(store).not.toBeNull();
        expect(store).badget_code = 'B001550';
        expect(store).addr = '臺北市中正區忠孝東路1段150號';
        expect(store).business_week = '星期一，星期二，星期三，星期四，星期五，星期六，星期日';
    })
})