export const runtime = 'edge';

type Params = {
  startDateAndSymbol: string[]
}

export async function GET(req: Request, context: { params: Params}) {

  const symbol = context.params.startDateAndSymbol[0]
  const startDate = context.params.startDateAndSymbol[1]

  try {
    const response = await fetch(`http://127.0.0.1:8000/investmentAnalysis/v1/sentimentAnalysis?symbol=${symbol}&start_date=${startDate}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await response.json();
    console.log("data", data)

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}