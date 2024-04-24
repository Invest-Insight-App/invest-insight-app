export const runtime = 'edge';

type Params = {
  exchangeNameAndPageNumber: string[]
}

export async function GET(req: Request, context: { params: Params}) {

  const companyName = context.params.exchangeNameAndPageNumber[0]
  const pageNumber = context.params.exchangeNameAndPageNumber[1]

  try {
    const response = await fetch(`http://127.0.0.1:8000/ExchangeMarket/v1/Companies/${companyName}?page=${pageNumber}&limit=100`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}