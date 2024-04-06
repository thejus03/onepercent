import axios from 'axios';

export async function GET(req, res) {
  const accessKey = process.env.MAS_KEY; // Or fetch from secure source

  try {
    const currentDate = new Date();
    const yesterday = new Date(currentDate.getTime() - (24 * 60 * 60 * 1000));

    const dayb4 = new Date(yesterday.getTime() - (24 * 60 * 60 * 1000));
    const dayb4Year = dayb4.getFullYear();
    const dayb4month = String(dayb4.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
    const dayb4day = String(dayb4.getDate()).padStart(2, '0');
    const dayb4formattedDate = `${dayb4Year}-${dayb4month}-${dayb4day}`;

    const twodayb4 = new Date(dayb4.getTime() - (24 * 60 * 60 * 1000));
    const twodayb4Year = twodayb4.getFullYear();
    const twodayb4month = String(twodayb4.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
    const twodayb4day = String(twodayb4.getDate()).padStart(2, '0');
    const twodayb4formattedDate = `${twodayb4Year}-${twodayb4month}-${twodayb4day}`;

    const threedayb4 = new Date(twodayb4.getTime() - (24 * 60 * 60 * 1000));
    const threedayb4Year = threedayb4.getFullYear();
    const threedayb4month = String(threedayb4.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
    const threedayb4day = String(threedayb4.getDate()).padStart(2, '0');
    const threedayb4formattedDate = `${threedayb4Year}-${threedayb4month}-${threedayb4day}`;
    const MASurl = `https://eservices.mas.gov.sg/apimg-gw/server/monthly_statistical_bulletin_non610mssql/domestic_interest_rates_daily/views/domestic_interest_rates_daily?end_of_day=${twodayb4formattedDate}`
    const headers = {
      'keyid': accessKey,
    };
    const response = await axios.get(MASurl, { headers });

    const dayb4MASurl = `https://eservices.mas.gov.sg/apimg-gw/server/monthly_statistical_bulletin_non610mssql/domestic_interest_rates_daily/views/domestic_interest_rates_daily?end_of_day=${threedayb4formattedDate}`
    const dayb4response = await axios.get(dayb4MASurl,{headers})

    return new Response(JSON.stringify({ response: response.data, dayb4response: dayb4response.data }))
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data' });
  }
}