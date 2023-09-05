import React, { Component } from "react";

export class Spinner extends Component {
  render() {
    return (
      <div className="flex justify-center items-center  my-44 sm:my-48  md:my-72 ">
        <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
      </div>
    );
  }
}

export default Spinner;
