import { Organization,Departments,Sample,IOrganization } from "./interface";

class Agency extends Organization{

}
class TextileAgency extends Departments implements Sample,IOrganization {

}
var xyzAgency = new Agency();
xyzAgency.employes