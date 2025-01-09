/** @type {import('next').NextConfig} */

const redirectBase = process.env.NEXT_PUBLIC_BASE_PATH
  ? `${process.env.NEXT_PUBLIC_BASE_PATH}/`
  : "";

const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'Content-Security-Policy',
    value: "frame-ancestors 'none';"
  }
]


const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    nextImageExportOptimizer: {
      imageFolderPath: "public/images",
      exportFolderPath: "out",
      quality: 75,
    },
  },
  env: {
    storePicturesInWEBP: true,
    generateAndUseBlurImages: true,
    distServer: "https://dist.ballerina.io",
    gitHubPath:
      "https://github.com/ballerina-platform/ballerina-dev-website/blob/master/",
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: `/learn/build-a-data-service-in-ballerina`,
        destination: `/learn/resources/featured-scenarios/build-a-data-service-in-ballerina`,
      },
      {
        source: `/${redirectBase}learn/deploy-ballerina-on-kubernetes`,
        destination: `/${redirectBase}learn/resources/featured-scenarios/deploy-ballerina-on-kubernetes`,
      },
      {
        source: `/${redirectBase}learn/create-your-first-connector-with-ballerina`,
        destination: `/${redirectBase}learn/resources/featured-scenarios/create-your-first-connector-with-ballerina`,
      },
      {
        source: `/${redirectBase}learn/manage-data-persistence-with-bal-persist`,
        destination: `/${redirectBase}learn/resources/featured-scenarios/manage-data-persistence-with-bal-persist`,
      },
      {
        source: `/${redirectBase}learn/work-with-data-using-queries-in-ballerina`,
        destination: `/${redirectBase}learn/resources/featured-scenarios/work-with-data-using-queries-in-ballerina`,
      },
      {
        source: `/${redirectBase}learn/write-a-graphql-api-with-ballerina`,
        destination: `/${redirectBase}learn/resources/featured-scenarios/write-a-graphql-api-with-ballerina`,
      },
      {
        source: `/${redirectBase}learn/write-a-grpc-service-with-ballerina`,
        destination: `/${redirectBase}learn/resources/featured-scenarios/write-a-grpc-service-with-ballerina`,
      },
      {
        source: `/${redirectBase}learn/write-a-restful-api-with-ballerina`,
        destination: `/${redirectBase}learn/resources/featured-scenarios/write-a-restful-api-with-ballerina`,
      },
      {
        source: `/${redirectBase}learn/get-started`,
        destination: `/${redirectBase}learn/integration/get-started`,
      },
      {
        source: `/${redirectBase}learn/vs-code-extension/get-started`,
        destination: `/${redirectBase}learn/vs-code-extension/get-started`,
      },
      {
        source: `/${redirectBase}learn/ballerina-specifications`,
        destination: `/${redirectBase}learn/references/ballerina-specifications`,
      },
      {
        source: `/${redirectBase}learn/language-basics`,
        destination: `/${redirectBase}learn/resources/learn-the-language/language-basics`,
      },
      {
        source: `/${redirectBase}learn/language-walkthrough`,
        destination: `/${redirectBase}learn/resources/learn-the-language/language-walkthrough`,
      },
      {
        source: `/${redirectBase}learn/network-interaction`,
        destination: `/${redirectBase}learn/resources/learn-the-language/network-interaction`,
      },
      {
        source: `/${redirectBase}learn/concurrency`,
        destination: `/${redirectBase}learn/resources/learn-the-language/concurrency`,
      },
      {
        source: `/${redirectBase}learn/advanced-general-purpose-language-features`,
        destination: `/${redirectBase}learn/resources/learn-the-language/advanced-general-purpose-language-features`,
      },
      {
        source: `/${redirectBase}learn/data`,
        destination: `/${redirectBase}learn/resources/learn-the-language/data`,
      },
      {
        source: `/${redirectBase}learn/installation-options`,
        destination: `/${redirectBase}learn/get-started/installation-options`,
      },
      {
        source: "/learn",
        destination: "/learn/get-started/install-ballerina/set-up-ballerina",
      },
      {
        source: `/${redirectBase}learn/openapi-tool`,
        destination: `/${redirectBase}learn/integration-tools/openapi-tool`,
      },
      {
        source: `/${redirectBase}learn/graphql-tool`,
        destination: `/${redirectBase}learn/integration-tools/graphql-tool`,
      },
      {
        source: `/${redirectBase}learn/asyncapi-tool`,
        destination: `/${redirectBase}learn/integration-tools/asyncapi-tool`,
      },
      {
        source: `/${redirectBase}learn/grpc-tool`,
        destination: `/${redirectBase}learn/integration-tools/grpc-tool`,
      },
      {
        source: `/${redirectBase}learn/strand-dump-tool`,
        destination: `/${redirectBase}learn/development-tutorials/troubleshoot-the-runtime/strand-dump-tool`,
      },
      {
        source: `/${redirectBase}learn/ballerina-profiler`,
        destination: `/${redirectBase}learn/development-tutorials/troubleshoot-the-runtime/ballerina-profiler`,
      },
      {
        source: `/${redirectBase}learn/edi-tool`,
        destination: `/${redirectBase}learn/integration-tools/edi-tool`,
      },
      {
        source: `/${redirectBase}learn/health-tool`,
        destination: `/${redirectBase}learn/integration-tools/health-tool`,
      },
      {
        source: `/${redirectBase}learn/bal-persist-overview`,
        destination: `/${redirectBase}learn/development-tutorials/ballerina-persist/bal-persist-overview`,
      },
      {
        source: `/${redirectBase}learn/persist-cli-tool`,
        destination: `/${redirectBase}learn/development-tutorials/ballerina-persist/persist-cli-tool`,
      },
      {
        source: `/${redirectBase}learn/persist-model`,
        destination: `/${redirectBase}learn/development-tutorials/ballerina-persist/persist-model`,
      },
      {
        source: `/${redirectBase}learn/persist-client-api`,
        destination: `/${redirectBase}learn/development-tutorials/ballerina-persist/persist-client-api`,
      },
      {
        source: `/${redirectBase}learn/persist-introspection`,
        destination: `/${redirectBase}learn/development-tutorials/ballerina-persist/persist-introspection`,
      },
      {
        source: `/${redirectBase}learn/supported-data-stores`,
        destination: `/${redirectBase}learn/development-tutorials/ballerina-persist/supported-data-stores`,
      },
      {
        source: `/${redirectBase}learn/call-java-code-from-ballerina`,
        destination: `/${redirectBase}learn/development-tutorials/java-interoperability/call-java-code-from-ballerina`,
      },
      {
        source: `/${redirectBase}learn/the-bindgen-tool`,
        destination: `/${redirectBase}learn/development-tutorials/java-interoperability/the-bindgen-tool`,
      },
      {
        source: `/${redirectBase}learn/ballerina-ffi`,
        destination: `/${redirectBase}learn/development-tutorials/java-interoperability/ballerina-ffi`,
      },
      {
        source: `/${redirectBase}learn/debug-ballerina-programs`,
        destination: `/${redirectBase}learn/development-tutorials/test-document-the-code/debug-ballerina-programs`,
      },
      {
        source: `/${redirectBase}learn/generate-code-documentation`,
        destination: `/${redirectBase}learn/development-tutorials/test-document-the-code/generate-code-documentation`,
      },
      {
        source: `/${redirectBase}learn/manage-dependencies`,
        destination: `/${redirectBase}learn/development-tutorials/source-code-dependencies/manage-dependencies`,
      },
      {
        source: `/${redirectBase}learn/configure-a-sample-ballerina-service`,
        destination: `/${redirectBase}learn/development-tutorials/configurability/configure-a-sample-ballerina-service`,
      },
      {
        source: `/${redirectBase}learn/configure-values`,
        destination: `/${redirectBase}learn/development-tutorials/configurability/configure-values`,
      },
      {
        source: `/${redirectBase}learn/provide-values-to-configurable-variables`,
        destination: `/${redirectBase}learn/development-tutorials/configurability/provide-values-to-configurable-variables`,
      },
      {
        source: `/${redirectBase}learn/observe-ballerina-programs`,
        destination: `/${redirectBase}learn/development-tutorials/observability/observe-ballerina-programs`,
      },
      {
        source: `/${redirectBase}learn/observe-logs`,
        destination: `/${redirectBase}learn/development-tutorials/observability/observe-logs`,
      },
      {
        source: `/${redirectBase}learn/observe-metrics`,
        destination: `/${redirectBase}learn/development-tutorials/observability/observe-metrics`,
      },
      {
        source: `/${redirectBase}learn/observe-tracing`,
        destination: `/${redirectBase}learn/development-tutorials/observability/observe-tracing`,
      },
      {
        source: `/${redirectBase}learn/organize-ballerina-code`,
        destination: `/${redirectBase}learn/development-tutorials/source-code-dependencies/organize-ballerina-code`,
      },
      {
        source: `/${redirectBase}learn/publish-packages-to-ballerina-central`,
        destination: `/${redirectBase}learn/development-tutorials/ballerina-central/publish-packages-to-ballerina-central`,
      },
      {
        source: `/${redirectBase}learn/configure-a-network-proxy`,
        destination: `/${redirectBase}learn/development-tutorials/ballerina-central/configure-a-network-proxy`,
      },
      {
        source: `/${redirectBase}learn/code-to-cloud-deployment`,
        destination: `/${redirectBase}learn/development-tutorials/run-in-the-cloud/code-to-cloud-deployment`,
      },
      {
        source: `/${redirectBase}learn/azure-functions`,
        destination: `/${redirectBase}learn/development-tutorials/run-in-the-cloud/azure-functions`,
      },
      {
        source: `/${redirectBase}learn/aws-lambda`,
        destination: `/${redirectBase}learn/development-tutorials/run-in-the-cloud/aws-lambda`,
      },
      {
        source: `/${redirectBase}learn/deployment-guidelines-overview`,
        destination: `/${redirectBase}learn/development-tutorials/deployment-guide/deployment-guidelines-overview`,
      },
      {
        source: `/${redirectBase}learn/virtual-machine-deployment`,
        destination: `/${redirectBase}learn/development-tutorials/deployment-guide/virtual-machine-deployment`,
      },
      {
        source: `/${redirectBase}learn/k8s-deployment`,
        destination: `/${redirectBase}learn/development-tutorials/deployment-guide/k8s-deployment`,
      },
      {
        source: `/${redirectBase}learn/serverless-deployment`,
        destination: `/${redirectBase}learn/development-tutorials/deployment-guide/serverless-deployment`,
      },
      {
        source: `/${redirectBase}learn/test-ballerina-code/:slug`,
        destination: `/${redirectBase}learn/development-tutorials/test-document-the-code/test-ballerina-code/:slug`,
      },
      {
        source: `/${redirectBase}learn/package-references`,
        destination: `/${redirectBase}learn/development-tutorials/source-code-dependencies/package-references`,
      },
      {
        source: `/${redirectBase}learn/customize-formatting`,
        destination: `/${redirectBase}learn/development-tutorials/source-code-dependencies/customize-formatting`,
      },
      {
        source: `/${redirectBase}learn/cli-commands/`,
        destination: `/${redirectBase}learn/development-tutorials/build-and-run/cli-commands/`,
      },
      {
        source: `/${redirectBase}learn/update-tool/`,
        destination: `/${redirectBase}learn/development-tutorials/build-and-run/update-tool/`,
      },
      {
        source: `/${redirectBase}learn/ballerina-shell/`,
        destination: `/${redirectBase}learn/development-tutorials/build-and-run/ballerina-shell/`,
      },
      {
        source: `/${redirectBase}learn/style-guide/:slug`,
        destination: `/${redirectBase}learn/development-tutorials/source-code-dependencies/style-guide/:slug`,
      },
      {
        source: `/${redirectBase}learn/style-guide/coding-conventions/:slug`,
        destination: `/${redirectBase}learn/references/style-guide/coding-conventions/:slug`,
      },
      {
        source: `/${redirectBase}learn/graalvm-executable-overview`,
        destination: `/${redirectBase}learn/development-tutorials/build-a-graalvm-executable/graalvm-executable-overview`,
      },
      {
        source: `/${redirectBase}learn/build-the-executable-locally`,
        destination: `/${redirectBase}learn/development-tutorials/build-a-graalvm-executable/build-the-executable-locally`,
      },
      {
        source: `/${redirectBase}learn/build-the-executable-in-a-container`,
        destination: `/${redirectBase}learn/development-tutorials/build-a-graalvm-executable/build-the-executable-in-a-container`,
      },
      {
        source: `/${redirectBase}downloads/swan-lake-release-notes`,
        destination: `/${redirectBase}downloads/swan-lake-release-notes/2201.0.2`,
      },
      {
        source: `/${redirectBase}1.2/learn/`,
        destination: `/${redirectBase}1.2/learn/index.html`,
      },
      {
        source: `/${redirectBase}1.2/learn/api-docs/ballerina/`,
        destination: `/${redirectBase}1.2/learn/api-docs/ballerina/index.html`,
      },
      {
        source: `/${redirectBase}1.1/learn/`,
        destination: `/${redirectBase}1.1/learn/index.html`,
      },
      {
        source: `/${redirectBase}1.1/learn/api-docs/ballerina/`,
        destination: `/${redirectBase}1.1/learn/api-docs/ballerina/index.html`,
      },
      {
        source: `/${redirectBase}1.0/learn/`,
        destination: `/${redirectBase}1.0/learn/index.html`,
      },
      {
        source: `/${redirectBase}1.0/learn/api-docs/ballerina/`,
        destination: `/${redirectBase}1.0/learn/api-docs/ballerina/index.html`,
      },
      {
        source: `/${redirectBase}0.990/learn/api-docs/ballerina/`,
        destination: `/${redirectBase}0.990/learn/api-docs/ballerina/index.html`,
      },
      {
        source: `/cookie-policy`,
        destination: `/${redirectBase}policies/cookie-policy`,
      },
      {
        source: `/license-of-site`,
        destination: `/${redirectBase}policies/license-of-site`,
      },
      {
        source: `/terms-of-service`,
        destination: `/${redirectBase}policies/terms-of-service`,
      },
      {
        source: `/privacy-policy`,
        destination: `/${redirectBase}policies/privacy-policy`,
      },
      {
        source: `/security-policy`,
        destination: `/${redirectBase}policies/security-policy`,
      },
      {
        source: `/trademark-usage-policy`,
        destination: `/${redirectBase}policies/trademark-usage-policy`,
      },
      {
        source: `/code-of-conduct`,
        destination: `/${redirectBase}policies/code-of-conduct`,
      },
      {
        source: `/CODEOWNERS`,
        destination: `/${redirectBase}policies/CODEOWNERS`,
      },
      {
        source: `/spec/lang/2022R2/`,
        destination: `/spec/lang/2022R2/index.html`,
      },
      {
        source: `/spec/lang/2022R1/`,
        destination: `/spec/lang/2022R1/index.html`,
      },
      {
        source: `/spec/lang/2021R1/`,
        destination: `/spec/lang/2021R1/index.html`,
      },
      {
        source: `/spec/lang/2020R1/`,
        destination: `/spec/lang/2020R1/index.html`,
      },
      {
        source: `/spec/lang/2019R3/`,
        destination: `/spec/lang/2019R3/index.html`,
      },
      {
        source: `/spec/lang/2019R2/`,
        destination: `/spec/lang/2019R2/index.html`,
      },
      {
        source: `/spec/lang/2019R1/`,
        destination: `/spec/lang/2019R1/index.html`,
      },
      {
        source: `/learn/supported-data-formats`,
        destination: `/learn/integration/supported-data-formats`,
      },
      {
        source: `/learn/supported-network-protocols`,
        destination: `/learn/integration/supported-network-protocols`,
      },
      {
        source: `/learn/pre-built-integrations`,
        destination: `/learn/integration/pre-built-integrations`,
      },
      {
        source: `/learn/pre-built-integrations/google-sheets-to-salesforce-integration`,
        destination: `/learn/integration/pre-built-integrations/google-sheets-to-salesforce-integration`,
      },
      {
        source: `/learn/pre-built-integrations/kafka-to-salesforce-integration`,
        destination: `/learn/integration/pre-built-integrations/kafka-to-salesforce-integration`,
      },
      {
        source: `/learn/pre-built-integrations/mysql-to-salesforce-integration`,
        destination: `/learn/integration/pre-built-integrations/mysql-to-salesforce-integration`,
      },
      {
        source: `/learn/pre-built-integrations/gmail-to-salesforce-integration`,
        destination: `/learn/integration/pre-built-integrations/gmail-to-salesforce-integration`,
      },
      {
        source: `/learn/pre-built-integrations/salesforce-to-twilio-integration`,
        destination: `/learn/integration/pre-built-integrations/salesforce-to-twilio-integration`,
      },
      {
        source: `/learn/pre-built-integrations/news-api-to-email-integration`,
        destination: `/learn/integration/pre-built-integrations/news-api-to-email-integration`,
      },
      {
        source: `/learn/pre-built-integrations/github-to-email-integration`,
        destination: `/learn/integration/pre-built-integrations/github-to-email-integration`,
      },
      {
        source: `/learn/pre-built-integrations/shopify-to-outlook-integration`,
        destination: `/learn/integration/pre-built-integrations/shopify-to-outlook-integration`,
      },
      {
        source: `/learn/pre-built-integrations/google-drive-to-onedrive-integration`,
        destination: `/learn/integration/pre-built-integrations/google-drive-to-onedrive-integration`,
      },
      {
        source: `/learn/pre-built-integrations/hubspot-contacts-to-google-contacts-integration`,
        destination: `/learn/integration/pre-built-integrations/hubspot-contacts-to-google-contacts-integration`,
      },
      {
        source: `/learn/pre-built-integrations/ftp-edi-message-to-salesforce-opportunity`,
        destination: `/learn/integration/pre-built-integrations/ftp-edi-message-to-salesforce-opportunity`,
      },
      {
        source: `/learn/integration-tutorials`,
        destination: `/learn/integration/integration-tutorials`,
      },
      {
        source: `/learn/integration-tutorials/:slug`,
        destination: `/learn/integration/integration-tutorials/:slug`,
      }
    ];
  },
  trailingSlash: true,
  resolve: [{ path: false, fs: false }],
  experimental: {
    scrollRestoration: true,
  }
};

module.exports = nextConfig;
