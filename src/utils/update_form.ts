import { UpdateUserFormInput } from "../components/pages/updateUserInfo";
import {Address, Biometric, DateOfBirth, EditPersonInfoParameters, Names, NationalIDNumber, PersonInfoRequest, Phenotype } from "../grpc/pb/message_and_service_pb";
import { ExistService } from "../store/exist_api_call";

function mapdata(data: UpdateUserFormInput) {
  var personId = new NationalIDNumber().setId("5ff51101300002e");

  var names = new Names().setNom(data.Nom);
  names.setPrenom(data.Prenom);
  names.setMiddleNamesList([data.PostNom]);

  var phenotype = new Phenotype().setEyeColor(data.EyeColor);
  phenotype.setHeight(data.Taille);
  phenotype.setWeight(data.Poids);

  var biometric = new Biometric().setPhotos("bbbbbbbbbb");

  var dob = new DateOfBirth().setDay("23");
  dob.setMonth("march");
  dob.setYear("1998");

  var address = new Address().setAvenue(data.Avenue);
  address.setCommune(data.Commune);
  address.setQuartier(data.Quartier);
  address.setNumber(data.Numero);
  address.setVille(data.Ville);
  address.setZipCode(data.CodePostal.toString());
  address.setReference(data.Reference);

  var personInfoRequest = new PersonInfoRequest().setNames(names);
  personInfoRequest.setAddress(address);
  personInfoRequest.setBiometrics(biometric);
  personInfoRequest.setDateOfBirth(dob);
  personInfoRequest.setPhenotypes(phenotype);

  var editPersonInfoParameters =
    new EditPersonInfoParameters().setEditedpersoninfo(personInfoRequest);
  editPersonInfoParameters.setPersonid(personId);

  return editPersonInfoParameters;
}

export function updateUserInformation(formData: UpdateUserFormInput) {
  var EditPersonInfoParameters = mapdata(formData);
  ExistService.updatePersonInfo(
    EditPersonInfoParameters,
      null).then((value) => {
        console.log(`The return result is ${value}`)
    })
}