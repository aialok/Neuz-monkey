import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageNumber: 20,
    heading: "Top Headlines",
  };
  static propTypes = {
    category: PropTypes.string,
    country: PropTypes.string,
    pageNumber: PropTypes.number,
    heading: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  async componentDidMount() {
    console.log("Component is mounted");
    window.scrollTo(0, 0);

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=81b7aea5c713440e8c1514767ff42bdf&page=${this.state.page}&pageSize=${this.props.pageNumber}`;
    console.log(url);
    let data = await fetch(url);

    let parsedData = await data.json();
    setTimeout(() => {
      this.setState({
        articles: parsedData.articles,
        totalArticles: parsedData.totalResults,
        loading: false,
      });
    }, 500);

    console.log(parsedData);
  }

  handlePageChange(event) {
    const flag = event.target.getAttribute("value");

    if (flag == "prev" && this.state.page > 1) {
      try {
        this.setState({ page: this.state.page - 1, loading: true });

        this.componentDidMount();

        console.log("Clicked");
      } catch (error) {
        console.log(error);
      }
    } else if (
      this.state.page + 1 <=
      Math.ceil(this.state.totalArticles / 20)
    ) {
      try {
        this.setState({ page: this.state.page + 1, loading: true });
        console.log("Clicked");
        this.componentDidMount();
      } catch (error) {
        console.log(error);
      }
    }
  }

  imgUrl =
    "https://img.freepik.com/free-vector/news-concept-landing-page_52683-20706.jpg";

  render() {
    return (
      <>
        <div>
          <h1 className="text-6xl m-4 text-center font-semibold text-cyan-400">
            {this.props.heading}
          </h1>
          <hr className="my-4" />
          {this.state.loading ? (
            <Spinner />
          ) : (
            <div className="newsitems flex justify-around flex-wrap">
              {this.state.articles.map((items, index) => {
                // console.log(items, index);
                return (
                  <NewsItem
                    title={items.title}
                    imgSrc={
                      items.urlToImage == null ? this.imgUrl : items.urlToImage
                    }
                    desc={items.description}
                    author={items.author}
                    newsSrc={items.url}
                    key={index}
                  />
                );
              })}
            </div>
          )}
        </div>

        <div className="navigation flex justify-evenly my-10 ">
          <div className="buttonNext">
            <button
              disabled={this.state.page <= 1}
              className="inline-flex items-center w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
              onClick={this.handlePageChange}
              value="prev"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
              Prev Page
            </button>
          </div>
          <div className="buttonNext">
            <button
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalArticles / 20)
              }
              className="inline-flex items-center w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-blue-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
              onClick={this.handlePageChange}
              value="next"
            >
              Next Page
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
