#!/bin/bash

#Rearrange files to match the urls
cp -r ./out/learn/development-tutorials/* ./out/learn
cp -r ./out/learn/integration/* ./out/learn
cp -r ./out/learn/integration-tools/* ./out/learn
cp -r ./out/learn/troubleshoot-the-runtime/* ./out/learn
cp -r ./out/learn/references/* ./out/learn
cp -r ./out/learn/resources/* ./out/learn
cp -r ./out/policies/* ./out/

#Rearrange files inside the sub-folders of learn-the-platform folder
cp -r ./out/learn/build-a-graalvm-executable/* ./out/learn
cp -r ./out/learn/build-and-run/* ./out/learn
cp -r ./out/learn/ballerina-central/* ./out/learn
cp -r ./out/learn/configurability/* ./out/learn
cp -r ./out/learn/java-interoperability/* ./out/learn
cp -r ./out/learn/observability/* ./out/learn
cp -r ./out/learn/test-document-the-code/* ./out/learn
cp -r ./out/learn/source-code-dependencies/* ./out/learn
cp -r ./out/learn/ballerina-persist/* ./out/learn
cp -r ./out/learn/run-in-the-cloud/* ./out/learn
cp -r ./out/learn/deployment-guide/* ./out/learn

#Rearrange files inside the sub-folders of resources folder
cp -r ./out/learn/featured-scenarios/* ./out/learn
cp -r ./out/learn/learn-the-language/* ./out/learn


cp ./out/404/index.html ./out/404.html

#Remove duplicated files
rm -rf ./out/learn/development-tutorials/ ./out/learn/integration/ ./out/learn/integration-tools/ ./out/learn/troubleshoot-the-runtime/ ./out/policies/ ./out/learn/references/ .out/learn/resources/
rm -rf ./out/learn/build-a-graalvm-executable ./out/learn/ballerina-central/ ./out/learn/configurability/ ./out/learn/java-interoperability/ ./out/learn/test-document-the-code/ ./out/learn/source-code-dependencies/ ./out/learn/ballerina-persist/ ./out/learn/build-and-run/ ./out/learn/observability/ ./out/learn/featured-scenarios/ ./out/learn/learn-the-language/* ./out/learn/run-in-the-cloud/ ./out/learn/deployment-guide/


#Edit the sitemap
sed -i '' 's/development-tutorials\///g' ./out/sitemap.xml
sed -i '' -e '/\/use-cases\/integration\//!s/\/integration\//\//g' ./out/sitemap.xml
sed -i '' 's/integration-tools\///g' ./out/sitemap.xml
sed -i '' 's/troubleshoot-the-runtime\///g' ./out/sitemap.xml
sed -i '' 's/\/learn\/references\//\/learn\//g' ./out/sitemap.xml
sed -i '' 's/\/resources\//\//g' ./out/sitemap.xml
sed -i '' 's/policies\///g' ./out/sitemap.xml

sed -i '' 's/build-a-graalvm-executable\///g' ./out/sitemap.xml
sed -i '' 's/\/ballerina-central\//\//g' ./out/sitemap.xml
sed -i '' 's/ballerina-persist\///g' ./out/sitemap.xml
sed -i '' 's/java-interoperability\///g' ./out/sitemap.xml
sed -i '' 's/test-document-the-code\///g' ./out/sitemap.xml
sed -i '' 's/source-code-dependencies\///g' ./out/sitemap.xml
sed -i '' 's/observability\///g' ./out/sitemap.xml
sed -i '' 's/configurability\///g' ./out/sitemap.xml
sed -i '' 's/featured-scenarios\///g' ./out/sitemap.xml
sed -i '' 's/learn-the-language\///g' ./out/sitemap.xml
sed -i '' 's/build-and-run\///g' ./out/sitemap.xml
sed -i '' 's/run-in-the-cloud\///g' ./out/sitemap.xml
sed -i '' 's/deployment-guide\///g' ./out/sitemap.xml

