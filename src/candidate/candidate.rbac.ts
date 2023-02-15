import { AccessControl } from "accesscontrol";

const ac = new AccessControl();
ac.grant("Candidate").deleteOwn("profile");
