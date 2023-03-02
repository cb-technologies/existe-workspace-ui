# GRPC SETUP

This file is just to provide us with information on how to set up grpc on the UI side: Generating the different files for both the server stubs(functions) and our messages in the proto. Those files will be generated in typescript

## 1. Installing grpc plugin

After adding grpc-web as dependency to our react project, we have to generate the different typescript files using the **protoc-gen-grpc-web** plugin. First install the plugin by downloading it from https://github.com/grpc/grpc-web/release. </br> -- **MAKE SURE TO HAVE protoc compiler installed and executable form your PATH. for more info on how to do this you can refer to the read me in the backend codebase** </br>
After dowloading the **protoc-gen-grpc-web**, make sure to make it executable by running </br>

```sh
 mv pathOfTheDownloadedFile /usr/local/bin/protoc-gen-grpc-web
 chmod +x /usr/local/bin/protoc-gen-grpc-web
```
or simply

```
brew install protoc-gen-grpc-web
npm install -g protoc-gen-js

```

## 2. Generating the different files

```sh
protoc -I=pathToProtoDependency proto_file_used_to_generate--js_out=commonjs:pathMessages --grpc-web_out=import_style=typescript,mode=grpcweb:pathStub
```
Example when in the proto folder: 
```sh
protoc -I=. message_and_service.proto --js_out=import_style=commonjs:../pb --grpc-web_out=import_style=typescript,mode=grpcwebtext:../pb
```

- **pathToProtoDependency**: This is where the proto compiler will look into if it needs to resolve any dependency while using the proto file to generate javascript/typescript code
- **proto_file_used_to_generate**: The path to the proto file that will be used to generate the code
- **pathMessages**: The path where we want to keep all of our messages/entity code generation
- **pathStub**: The path where we want our gRPC-Web service client stubs to be generated. Stubs are the different function that we will call in our typescript react code to send request to the server
