export const initialCompaniesData = [{
    category: null,
    cik: null,
    currency: null,
    cusip: null,
    exchange: null,
    fama_industry: null,
    fama_sector: null,
    id: null,
    industry: null,
    is_delisted: null,
    location: null,
    name: null,
    sector: null,
    sic: null,
    sic_industry: null,
    sic_sector: null,
    ticker: null
}];

  //dummie data, to be deleted after linked the real data
  export const dummieData = {
    responses: [
      {
        article_sentiment_analysis: [
          {
            label: "",
            score: 0,
          },
        ],
        article_name:
          "",
        article_description:
          "",
        article_url:
          "",
        article_snippet:
          "",
      },
    ],
    summary: [
      {
        article_summary:
          "",
        combined_text:
          "",
      }
    ],
  };

    //dummie data, to be deleted after linked the real data
    export const dummieDataTwo = {
        responses: [
          {
            article_sentiment_analysis: [
              {
                label: "positive",
                score: 0.9983893632888794,
              },
            ],
            article_name:
              "TaxAct Reaches Multimillion-Dollar Settlement In Online Privacy Suit",
            article_description:
              "TaxAct Inc. customers have reached a settlement in a class action lawsuit alleging that the tax preparation company shared confidential taxpayer information.",
            article_url:
              "https://www.forbes.com/sites/kellyphillipserb/2024/02/29/taxact-reaches-multimillion-dollar-settlement-in-online-privacy-suit/",
            article_snippet:
              "Privacy concerns getty\n\nTaxAct Inc. customers have reached a settlement in a class action lawsuit alleging that the tax preparation company shared confidential ...",
          },
          {
            article_sentiment_analysis: [
              {
                label: "neutral",
                score: 0.9998630285263062,
              },
            ],
            article_name:
              "Warren Buffett’s 35 Best Quotes About Business, Investing, and Life",
            article_description:
              "In this piece, we will take a look at Warren Buffett's 35 best quotes about business, investing, and life.",
            article_url:
              "https://www.insidermonkey.com/blog/warren-buffetts-35-best-quotes-about-business-investing-and-life-1261880/",
            article_snippet:
              "In this piece, we will take a look at Warren Buffett’s 35 best quotes about business, investing, and life. If you want to skip our introduction to the world?...",
          },
        ],
        summary: [
          {
            article_summary:
              "TaxAct Inc. customers have reached a settlement in a class action lawsuit alleging that the tax preparation company shared confidential information. Since 1998, TaxAct customers e-filed over 90 million tax returns.",
            combined_text:
              "Privacy concerns getty\n\nTaxAct Inc. customers have reached a settlement in a class action lawsuit alleging that the tax preparation company shared confidential ... Those platforms included <em>Meta</em> <em>Platforms</em>, <em>Inc</em>. (formerly referred to as Facebook), Google, and Google Double Click.\n\nAccording to court documents, since 1998, TaxAct customers e-filed over 90 million tax returns.",
          },
          {
            article_summary:
              "Warren Buffett's 35 best quotes about business, investing, and life. We take a look at some of the firms that have become trillion dollar business enterprises.",
            combined_text:
              "In this piece, we will take a look at Warren Buffett’s 35 best quotes about business, investing, and life. If you want to skip our introduction to the world?... (NASDAQ:AMZN) and <em>Meta</em> <em>Platforms</em>, <em>Inc</em>. (<em>NASDAQ:META</em>). While these were not chosen by Buffett himself, the firms do have enduring competitive advantages that have seen them become trillion dollar business enterprises that are key players in valuable and high growth industries such as e-Commerce and artificial intelligence.",
          },
        ],
      };