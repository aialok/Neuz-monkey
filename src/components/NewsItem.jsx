import PropTypes from "prop-types";
import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    const { title, desc, imgSrc, author, newsSrc } = this.props;
    return (
      <>
        <div className="max-w-sm my-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg w-full h-40 object-cover"
              src={imgSrc}
              alt=""
            />
          </a>
          <div className="p-4 h-[300px] overflow-y-auto">
            <div>
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {desc}
              </p>
            </div>
          </div>
          <div className="p-4">
            <a
              href={newsSrc}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
            </a>
            <h3 className="text-white mt-2 text-lg font-semibold">{author}</h3>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
