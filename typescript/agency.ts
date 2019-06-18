// import { Organization,Departments,Sample,IOrganization } from "./interface";
import { OrganizationStructure} from "./interface"
class Agency extends OrganizationStructure.Organization{

}
class TextileAgency extends OrganizationStructure.Departments implements OrganizationStructure.Sample,OrganizationStructure.IOrganization {

}
var xyzAgency = new Agency();
xyzAgency.employes