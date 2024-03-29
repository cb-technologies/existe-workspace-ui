/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.21.9
// source: message_and_service.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as message_and_service_pb from './message_and_service_pb';


export class ExistCRUDClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorAddNewPersonInfo = new grpcWeb.MethodDescriptor(
    '/pb.ExistCRUD/AddNewPersonInfo',
    grpcWeb.MethodType.UNARY,
    message_and_service_pb.PersonInfoRequest,
    message_and_service_pb.Response,
    (request: message_and_service_pb.PersonInfoRequest) => {
      return request.serializeBinary();
    },
    message_and_service_pb.Response.deserializeBinary
  );

  addNewPersonInfo(
    request: message_and_service_pb.PersonInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<message_and_service_pb.Response>;

  addNewPersonInfo(
    request: message_and_service_pb.PersonInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: message_and_service_pb.Response) => void): grpcWeb.ClientReadableStream<message_and_service_pb.Response>;

  addNewPersonInfo(
    request: message_and_service_pb.PersonInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: message_and_service_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ExistCRUD/AddNewPersonInfo',
        request,
        metadata || {},
        this.methodDescriptorAddNewPersonInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ExistCRUD/AddNewPersonInfo',
    request,
    metadata || {},
    this.methodDescriptorAddNewPersonInfo);
  }

  methodDescriptorUpdatePersonInfo = new grpcWeb.MethodDescriptor(
    '/pb.ExistCRUD/UpdatePersonInfo',
    grpcWeb.MethodType.UNARY,
    message_and_service_pb.EditPersonInfoParameters,
    message_and_service_pb.Response,
    (request: message_and_service_pb.EditPersonInfoParameters) => {
      return request.serializeBinary();
    },
    message_and_service_pb.Response.deserializeBinary
  );

  updatePersonInfo(
    request: message_and_service_pb.EditPersonInfoParameters,
    metadata: grpcWeb.Metadata | null): Promise<message_and_service_pb.Response>;

  updatePersonInfo(
    request: message_and_service_pb.EditPersonInfoParameters,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: message_and_service_pb.Response) => void): grpcWeb.ClientReadableStream<message_and_service_pb.Response>;

  updatePersonInfo(
    request: message_and_service_pb.EditPersonInfoParameters,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: message_and_service_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ExistCRUD/UpdatePersonInfo',
        request,
        metadata || {},
        this.methodDescriptorUpdatePersonInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ExistCRUD/UpdatePersonInfo',
    request,
    metadata || {},
    this.methodDescriptorUpdatePersonInfo);
  }

  methodDescriptorFindPersonInfo = new grpcWeb.MethodDescriptor(
    '/pb.ExistCRUD/FindPersonInfo',
    grpcWeb.MethodType.UNARY,
    message_and_service_pb.NationalIDNumber,
    message_and_service_pb.PersonInfoResponse,
    (request: message_and_service_pb.NationalIDNumber) => {
      return request.serializeBinary();
    },
    message_and_service_pb.PersonInfoResponse.deserializeBinary
  );

  findPersonInfo(
    request: message_and_service_pb.NationalIDNumber,
    metadata: grpcWeb.Metadata | null): Promise<message_and_service_pb.PersonInfoResponse>;

  findPersonInfo(
    request: message_and_service_pb.NationalIDNumber,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: message_and_service_pb.PersonInfoResponse) => void): grpcWeb.ClientReadableStream<message_and_service_pb.PersonInfoResponse>;

  findPersonInfo(
    request: message_and_service_pb.NationalIDNumber,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: message_and_service_pb.PersonInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ExistCRUD/FindPersonInfo',
        request,
        metadata || {},
        this.methodDescriptorFindPersonInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ExistCRUD/FindPersonInfo',
    request,
    metadata || {},
    this.methodDescriptorFindPersonInfo);
  }

  methodDescriptorRetreiveUserBasedOnField = new grpcWeb.MethodDescriptor(
    '/pb.ExistCRUD/RetreiveUserBasedOnField',
    grpcWeb.MethodType.UNARY,
    message_and_service_pb.RetreivePersonInfoParameters,
    message_and_service_pb.PersonInfoResponse,
    (request: message_and_service_pb.RetreivePersonInfoParameters) => {
      return request.serializeBinary();
    },
    message_and_service_pb.PersonInfoResponse.deserializeBinary
  );

  retreiveUserBasedOnField(
    request: message_and_service_pb.RetreivePersonInfoParameters,
    metadata: grpcWeb.Metadata | null): Promise<message_and_service_pb.PersonInfoResponse>;

  retreiveUserBasedOnField(
    request: message_and_service_pb.RetreivePersonInfoParameters,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: message_and_service_pb.PersonInfoResponse) => void): grpcWeb.ClientReadableStream<message_and_service_pb.PersonInfoResponse>;

  retreiveUserBasedOnField(
    request: message_and_service_pb.RetreivePersonInfoParameters,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: message_and_service_pb.PersonInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ExistCRUD/RetreiveUserBasedOnField',
        request,
        metadata || {},
        this.methodDescriptorRetreiveUserBasedOnField,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ExistCRUD/RetreiveUserBasedOnField',
    request,
    metadata || {},
    this.methodDescriptorRetreiveUserBasedOnField);
  }

  methodDescriptorSignInAgent = new grpcWeb.MethodDescriptor(
    '/pb.ExistCRUD/SignInAgent',
    grpcWeb.MethodType.UNARY,
    message_and_service_pb.AgentSignInInfo,
    message_and_service_pb.Response,
    (request: message_and_service_pb.AgentSignInInfo) => {
      return request.serializeBinary();
    },
    message_and_service_pb.Response.deserializeBinary
  );

  signInAgent(
    request: message_and_service_pb.AgentSignInInfo,
    metadata: grpcWeb.Metadata | null): Promise<message_and_service_pb.Response>;

  signInAgent(
    request: message_and_service_pb.AgentSignInInfo,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: message_and_service_pb.Response) => void): grpcWeb.ClientReadableStream<message_and_service_pb.Response>;

  signInAgent(
    request: message_and_service_pb.AgentSignInInfo,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: message_and_service_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ExistCRUD/SignInAgent',
        request,
        metadata || {},
        this.methodDescriptorSignInAgent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ExistCRUD/SignInAgent',
    request,
    metadata || {},
    this.methodDescriptorSignInAgent);
  }

  methodDescriptorSignUpAgent = new grpcWeb.MethodDescriptor(
    '/pb.ExistCRUD/SignUpAgent',
    grpcWeb.MethodType.UNARY,
    message_and_service_pb.AgentInfo,
    message_and_service_pb.Response,
    (request: message_and_service_pb.AgentInfo) => {
      return request.serializeBinary();
    },
    message_and_service_pb.Response.deserializeBinary
  );

  signUpAgent(
    request: message_and_service_pb.AgentInfo,
    metadata: grpcWeb.Metadata | null): Promise<message_and_service_pb.Response>;

  signUpAgent(
    request: message_and_service_pb.AgentInfo,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: message_and_service_pb.Response) => void): grpcWeb.ClientReadableStream<message_and_service_pb.Response>;

  signUpAgent(
    request: message_and_service_pb.AgentInfo,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: message_and_service_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/pb.ExistCRUD/SignUpAgent',
        request,
        metadata || {},
        this.methodDescriptorSignUpAgent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.ExistCRUD/SignUpAgent',
    request,
    metadata || {},
    this.methodDescriptorSignUpAgent);
  }

}

