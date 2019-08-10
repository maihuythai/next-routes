import React from "react";
import Header from "../components/Header";
import { Link } from "../routes";

// fake async fetch
const fakePromise = data =>
  new Promise((resolve, reject) => setTimeout(() => resolve(data), 100));

export default class Article extends React.Component {
  // this page fetch async stuff before rendering
  static async getInitialProps({ query }) {
    const data = await fakePromise({
      slug: query.slug
    });
    return { data };
  }
  render() {
    return (
      <div>
        <Header/>
        <h3>Article {this.props.data.slug}</h3>
      </div>
    );
  }
}
