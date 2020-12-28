import axios from 'axios';

describe('learn axios and weather api', function() {
    test('get weather of taipei', async () => {
        let porkTaggings;
        porkTaggings = (await axios.get('https://data.coa.gov.tw/Service/OpenData/DataFileService.aspx?UnitId=H76')).data;

        expect(porkTaggings[0].market_name).toEqual('究挑食松南店');
        expect(porkTaggings[0].Lontitude).toEqual('121.532336');
    });
})