import * as jspb from 'google-protobuf'



export class Address extends jspb.Message {
  getNumber(): number;
  setNumber(value: number): Address;

  getAvenue(): string;
  setAvenue(value: string): Address;

  getQuartier(): string;
  setQuartier(value: string): Address;

  getCommune(): string;
  setCommune(value: string): Address;

  getZipCode(): string;
  setZipCode(value: string): Address;

  getProvince(): string;
  setProvince(value: string): Address;

  getVille(): string;
  setVille(value: string): Address;

  getReference(): string;
  setReference(value: string): Address;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Address.AsObject;
  static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
  static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Address;
  static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
  export type AsObject = {
    number: number,
    avenue: string,
    quartier: string,
    commune: string,
    zipCode: string,
    province: string,
    ville: string,
    reference: string,
  }
}

export class Sex extends jspb.Message {
  getSex(): SexEnum;
  setSex(value: SexEnum): Sex;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sex.AsObject;
  static toObject(includeInstance: boolean, msg: Sex): Sex.AsObject;
  static serializeBinaryToWriter(message: Sex, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sex;
  static deserializeBinaryFromReader(message: Sex, reader: jspb.BinaryReader): Sex;
}

export namespace Sex {
  export type AsObject = {
    sex: SexEnum,
  }
}

export class Names extends jspb.Message {
  getNom(): string;
  setNom(value: string): Names;

  getPrenom(): string;
  setPrenom(value: string): Names;

  getMiddleNamesList(): Array<string>;
  setMiddleNamesList(value: Array<string>): Names;
  clearMiddleNamesList(): Names;
  addMiddleNames(value: string, index?: number): Names;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Names.AsObject;
  static toObject(includeInstance: boolean, msg: Names): Names.AsObject;
  static serializeBinaryToWriter(message: Names, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Names;
  static deserializeBinaryFromReader(message: Names, reader: jspb.BinaryReader): Names;
}

export namespace Names {
  export type AsObject = {
    nom: string,
    prenom: string,
    middleNamesList: Array<string>,
  }
}

export class Origin extends jspb.Message {
  getProvinceList(): Array<string>;
  setProvinceList(value: Array<string>): Origin;
  clearProvinceList(): Origin;
  addProvince(value: string, index?: number): Origin;

  getChefLieu(): string;
  setChefLieu(value: string): Origin;

  getLieuDeNaissance(): string;
  setLieuDeNaissance(value: string): Origin;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Origin.AsObject;
  static toObject(includeInstance: boolean, msg: Origin): Origin.AsObject;
  static serializeBinaryToWriter(message: Origin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Origin;
  static deserializeBinaryFromReader(message: Origin, reader: jspb.BinaryReader): Origin;
}

export namespace Origin {
  export type AsObject = {
    provinceList: Array<string>,
    chefLieu: string,
    lieuDeNaissance: string,
  }
}

export class Phenotype extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): Phenotype;

  getWeight(): number;
  setWeight(value: number): Phenotype;

  getEyeColor(): string;
  setEyeColor(value: string): Phenotype;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Phenotype.AsObject;
  static toObject(includeInstance: boolean, msg: Phenotype): Phenotype.AsObject;
  static serializeBinaryToWriter(message: Phenotype, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Phenotype;
  static deserializeBinaryFromReader(message: Phenotype, reader: jspb.BinaryReader): Phenotype;
}

export namespace Phenotype {
  export type AsObject = {
    height: number,
    weight: number,
    eyeColor: string,
  }
}

export class Biometric extends jspb.Message {
  getPhotos(): Uint8Array | string;
  getPhotos_asU8(): Uint8Array;
  getPhotos_asB64(): string;
  setPhotos(value: Uint8Array | string): Biometric;

  getFingerPrint(): Uint8Array | string;
  getFingerPrint_asU8(): Uint8Array;
  getFingerPrint_asB64(): string;
  setFingerPrint(value: Uint8Array | string): Biometric;

  getPhotoType(): string;
  setPhotoType(value: string): Biometric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Biometric.AsObject;
  static toObject(includeInstance: boolean, msg: Biometric): Biometric.AsObject;
  static serializeBinaryToWriter(message: Biometric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Biometric;
  static deserializeBinaryFromReader(message: Biometric, reader: jspb.BinaryReader): Biometric;
}

export namespace Biometric {
  export type AsObject = {
    photos: Uint8Array | string,
    fingerPrint: Uint8Array | string,
    photoType: string,
  }
}

export class DateOfBirth extends jspb.Message {
  getDay(): string;
  setDay(value: string): DateOfBirth;

  getMonth(): string;
  setMonth(value: string): DateOfBirth;

  getYear(): string;
  setYear(value: string): DateOfBirth;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DateOfBirth.AsObject;
  static toObject(includeInstance: boolean, msg: DateOfBirth): DateOfBirth.AsObject;
  static serializeBinaryToWriter(message: DateOfBirth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DateOfBirth;
  static deserializeBinaryFromReader(message: DateOfBirth, reader: jspb.BinaryReader): DateOfBirth;
}

export namespace DateOfBirth {
  export type AsObject = {
    day: string,
    month: string,
    year: string,
  }
}

export class NationalIDNumber extends jspb.Message {
  getId(): string;
  setId(value: string): NationalIDNumber;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NationalIDNumber.AsObject;
  static toObject(includeInstance: boolean, msg: NationalIDNumber): NationalIDNumber.AsObject;
  static serializeBinaryToWriter(message: NationalIDNumber, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NationalIDNumber;
  static deserializeBinaryFromReader(message: NationalIDNumber, reader: jspb.BinaryReader): NationalIDNumber;
}

export namespace NationalIDNumber {
  export type AsObject = {
    id: string,
  }
}

export class Date extends jspb.Message {
  getYear(): number;
  setYear(value: number): Date;

  getMonth(): number;
  setMonth(value: number): Date;

  getDay(): number;
  setDay(value: number): Date;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Date.AsObject;
  static toObject(includeInstance: boolean, msg: Date): Date.AsObject;
  static serializeBinaryToWriter(message: Date, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Date;
  static deserializeBinaryFromReader(message: Date, reader: jspb.BinaryReader): Date;
}

export namespace Date {
  export type AsObject = {
    year: number,
    month: number,
    day: number,
  }
}

export class CardValidity extends jspb.Message {
  getIssuedate(): Date | undefined;
  setIssuedate(value?: Date): CardValidity;
  hasIssuedate(): boolean;
  clearIssuedate(): CardValidity;

  getExpirationdate(): Date | undefined;
  setExpirationdate(value?: Date): CardValidity;
  hasExpirationdate(): boolean;
  clearExpirationdate(): CardValidity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CardValidity.AsObject;
  static toObject(includeInstance: boolean, msg: CardValidity): CardValidity.AsObject;
  static serializeBinaryToWriter(message: CardValidity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CardValidity;
  static deserializeBinaryFromReader(message: CardValidity, reader: jspb.BinaryReader): CardValidity;
}

export namespace CardValidity {
  export type AsObject = {
    issuedate?: Date.AsObject,
    expirationdate?: Date.AsObject,
  }
}

export class PersonInfoRequest extends jspb.Message {
  getNames(): Names | undefined;
  setNames(value?: Names): PersonInfoRequest;
  hasNames(): boolean;
  clearNames(): PersonInfoRequest;

  getBiometrics(): Biometric | undefined;
  setBiometrics(value?: Biometric): PersonInfoRequest;
  hasBiometrics(): boolean;
  clearBiometrics(): PersonInfoRequest;

  getAddress(): Address | undefined;
  setAddress(value?: Address): PersonInfoRequest;
  hasAddress(): boolean;
  clearAddress(): PersonInfoRequest;

  getOrigins(): Origin | undefined;
  setOrigins(value?: Origin): PersonInfoRequest;
  hasOrigins(): boolean;
  clearOrigins(): PersonInfoRequest;

  getPhenotypes(): Phenotype | undefined;
  setPhenotypes(value?: Phenotype): PersonInfoRequest;
  hasPhenotypes(): boolean;
  clearPhenotypes(): PersonInfoRequest;

  getDateOfBirth(): DateOfBirth | undefined;
  setDateOfBirth(value?: DateOfBirth): PersonInfoRequest;
  hasDateOfBirth(): boolean;
  clearDateOfBirth(): PersonInfoRequest;

  getSex(): Sex | undefined;
  setSex(value?: Sex): PersonInfoRequest;
  hasSex(): boolean;
  clearSex(): PersonInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersonInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PersonInfoRequest): PersonInfoRequest.AsObject;
  static serializeBinaryToWriter(message: PersonInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersonInfoRequest;
  static deserializeBinaryFromReader(message: PersonInfoRequest, reader: jspb.BinaryReader): PersonInfoRequest;
}

export namespace PersonInfoRequest {
  export type AsObject = {
    names?: Names.AsObject,
    biometrics?: Biometric.AsObject,
    address?: Address.AsObject,
    origins?: Origin.AsObject,
    phenotypes?: Phenotype.AsObject,
    dateOfBirth?: DateOfBirth.AsObject,
    sex?: Sex.AsObject,
  }
}

export class PersonInfoResponse extends jspb.Message {
  getNames(): Names | undefined;
  setNames(value?: Names): PersonInfoResponse;
  hasNames(): boolean;
  clearNames(): PersonInfoResponse;

  getBiometrics(): Biometric | undefined;
  setBiometrics(value?: Biometric): PersonInfoResponse;
  hasBiometrics(): boolean;
  clearBiometrics(): PersonInfoResponse;

  getAddress(): Address | undefined;
  setAddress(value?: Address): PersonInfoResponse;
  hasAddress(): boolean;
  clearAddress(): PersonInfoResponse;

  getOrigins(): Origin | undefined;
  setOrigins(value?: Origin): PersonInfoResponse;
  hasOrigins(): boolean;
  clearOrigins(): PersonInfoResponse;

  getPhenotypes(): Phenotype | undefined;
  setPhenotypes(value?: Phenotype): PersonInfoResponse;
  hasPhenotypes(): boolean;
  clearPhenotypes(): PersonInfoResponse;

  getDateOfBirth(): DateOfBirth | undefined;
  setDateOfBirth(value?: DateOfBirth): PersonInfoResponse;
  hasDateOfBirth(): boolean;
  clearDateOfBirth(): PersonInfoResponse;

  getCardValidity(): CardValidity | undefined;
  setCardValidity(value?: CardValidity): PersonInfoResponse;
  hasCardValidity(): boolean;
  clearCardValidity(): PersonInfoResponse;

  getId(): NationalIDNumber | undefined;
  setId(value?: NationalIDNumber): PersonInfoResponse;
  hasId(): boolean;
  clearId(): PersonInfoResponse;

  getSex(): Sex | undefined;
  setSex(value?: Sex): PersonInfoResponse;
  hasSex(): boolean;
  clearSex(): PersonInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersonInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PersonInfoResponse): PersonInfoResponse.AsObject;
  static serializeBinaryToWriter(message: PersonInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersonInfoResponse;
  static deserializeBinaryFromReader(message: PersonInfoResponse, reader: jspb.BinaryReader): PersonInfoResponse;
}

export namespace PersonInfoResponse {
  export type AsObject = {
    names?: Names.AsObject,
    biometrics?: Biometric.AsObject,
    address?: Address.AsObject,
    origins?: Origin.AsObject,
    phenotypes?: Phenotype.AsObject,
    dateOfBirth?: DateOfBirth.AsObject,
    cardValidity?: CardValidity.AsObject,
    id?: NationalIDNumber.AsObject,
    sex?: Sex.AsObject,
  }
}

export class EditPersonInfoParameters extends jspb.Message {
  getPersonid(): NationalIDNumber | undefined;
  setPersonid(value?: NationalIDNumber): EditPersonInfoParameters;
  hasPersonid(): boolean;
  clearPersonid(): EditPersonInfoParameters;

  getEditedpersoninfo(): PersonInfoRequest | undefined;
  setEditedpersoninfo(value?: PersonInfoRequest): EditPersonInfoParameters;
  hasEditedpersoninfo(): boolean;
  clearEditedpersoninfo(): EditPersonInfoParameters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditPersonInfoParameters.AsObject;
  static toObject(includeInstance: boolean, msg: EditPersonInfoParameters): EditPersonInfoParameters.AsObject;
  static serializeBinaryToWriter(message: EditPersonInfoParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditPersonInfoParameters;
  static deserializeBinaryFromReader(message: EditPersonInfoParameters, reader: jspb.BinaryReader): EditPersonInfoParameters;
}

export namespace EditPersonInfoParameters {
  export type AsObject = {
    personid?: NationalIDNumber.AsObject,
    editedpersoninfo?: PersonInfoRequest.AsObject,
  }
}

export class RetreivePersonInfoParameters extends jspb.Message {
  getNames(): Names | undefined;
  setNames(value?: Names): RetreivePersonInfoParameters;
  hasNames(): boolean;
  clearNames(): RetreivePersonInfoParameters;

  getDateOfBirth(): DateOfBirth | undefined;
  setDateOfBirth(value?: DateOfBirth): RetreivePersonInfoParameters;
  hasDateOfBirth(): boolean;
  clearDateOfBirth(): RetreivePersonInfoParameters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetreivePersonInfoParameters.AsObject;
  static toObject(includeInstance: boolean, msg: RetreivePersonInfoParameters): RetreivePersonInfoParameters.AsObject;
  static serializeBinaryToWriter(message: RetreivePersonInfoParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetreivePersonInfoParameters;
  static deserializeBinaryFromReader(message: RetreivePersonInfoParameters, reader: jspb.BinaryReader): RetreivePersonInfoParameters;
}

export namespace RetreivePersonInfoParameters {
  export type AsObject = {
    names?: Names.AsObject,
    dateOfBirth?: DateOfBirth.AsObject,
  }
}

export class Response extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): Response;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    status: number,
  }
}

export class AgentInfo extends jspb.Message {
  getNom(): string;
  setNom(value: string): AgentInfo;

  getPrenom(): string;
  setPrenom(value: string): AgentInfo;

  getEmail(): string;
  setEmail(value: string): AgentInfo;

  getPassword(): string;
  setPassword(value: string): AgentInfo;

  getPhonenumber(): string;
  setPhonenumber(value: string): AgentInfo;

  getRole(): string;
  setRole(value: string): AgentInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AgentInfo): AgentInfo.AsObject;
  static serializeBinaryToWriter(message: AgentInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentInfo;
  static deserializeBinaryFromReader(message: AgentInfo, reader: jspb.BinaryReader): AgentInfo;
}

export namespace AgentInfo {
  export type AsObject = {
    nom: string,
    prenom: string,
    email: string,
    password: string,
    phonenumber: string,
    role: string,
  }
}

export class AgentSignInInfo extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): AgentSignInInfo;

  getPassword(): string;
  setPassword(value: string): AgentSignInInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentSignInInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AgentSignInInfo): AgentSignInInfo.AsObject;
  static serializeBinaryToWriter(message: AgentSignInInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentSignInInfo;
  static deserializeBinaryFromReader(message: AgentSignInInfo, reader: jspb.BinaryReader): AgentSignInInfo;
}

export namespace AgentSignInInfo {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export enum SexEnum { 
  UNKNOWN = 0,
  HOMME = 1,
  FEMME = 2,
}
