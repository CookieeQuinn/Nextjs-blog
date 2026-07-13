import Link from "next/link";
import Layout from "../../components/layout";
import Head from "next/head";
// import Script from "next/script";

function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      {/* 这个 Facebook 的 SDK 只是作为例子演示如何使用 Script 组件引入第三方 JS */}
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log("load script");
        }}
      /> */}
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
    </Layout>
  );
}

export default FirstPost;
