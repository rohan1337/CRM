import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./Pages/Homepage/Homepage";
import "./App.css";
import Leads from "./Pages/Lead Management/Leads";
import CreateNewLead from "./Pages/Lead Management/CreateNewLead";
import DetailedLeads from "./Pages/Lead Management/DetailedLeads";
import CustomerAccount from "./Pages/Customer Account/CustomerAccount";
import CreateNewAccount from "./Pages/Customer Account/CreateNewAccount";
import DetailedCustomerAccount from "./Pages/Customer Account/DetailedCustomerAccount";
import CustomerContact from "./Pages/Customer Contact/CustomerContact";
import CreateNewContact from "./Pages/Customer Contact/CreateNewContact";
import DetailedCustomerContact from "./Pages/Customer Contact/DetailedCustomerContact";
import Products from "./Pages/Product/Products";
import CreateNewProduct from "./Pages/Product/CreateNewProduct";
import DetailedProducts from "./Pages/Product/DetailedProducts";
import ProductCategory from "./Pages/Product Category/ProductCategory";
import CreateNewCategory from "./Pages/Product Category/CreateNewCategory";
import DetailedProductCategory from "./Pages/Product Category/DetailedProductCategory";
import SalesQuotes from "./Pages/Sales Quotes/SalesQuotes";
import CreateNewQuote from "./Pages/Sales Quotes/CreateNewQuote";
import DetailedSalesQuotes from "./Pages/Sales Quotes/DetailedSalesQuotes";
import Tasks from "./Pages/Tasks/Tasks";
import CreateNewTask from "./Pages/Tasks/CreateNewTask";
import DetailedTasks from "./Pages/Tasks/DetailedTasks";
import PhoneCalls from "./Pages/Phone/PhoneCalls";
import CreateNewCall from "./Pages/Phone/CreateNewCall";
import DetailedPhoneCalls from "./Pages/Phone/DetailedPhoneCalls";
import Tickets from "./Pages/Ticket/Tickets";
import CreateTicket from "./Pages/Ticket/CreateTicket";
import DisplayTicket from "./Pages/Ticket/DisplayTicket";
import Division from "./Pages/Business Structure/Division";
import OrganizationalStructure from "./Pages/Business Structure/OrganizationalStructure";
import NewOrganizationalCreation from "./Pages/Business Structure/NewOrganizationalCreation";
import AgentSupport from "./Pages/Agent Support/AgentSupport";
import KnowledgeBase from "./Pages/Knowledge Base/KnowledgeBase";
import GeneralSettings from "./Pages/General Settings/GeneralSettings";
import AccessManagement from "./Pages/Access Management/AccessManagement";
import CreateNewAccess from "./Pages/Access Management/CreateNewAccess";
import Workflow from "./Pages/Workflow/Workflow";
import CreateOrEditWorkflow from "./Pages/Workflow/CreateOrEditWorkflow";
import UserProfile from "./Pages/User Profile/UserProfile";
import CreateUserProfile from "./Pages/User Profile/CreateUserProfile";
import DetailedUserProfile from "./Pages/User Profile/DetailedUserProfile";
import Emails from "./Pages/Emails/Emails";
import CreateEmail from "./Pages/Emails/CreateEmail";
import EmailChannels from "./Pages/Email Channels/EmailChannels";
import CreateEmailChannels from "./Pages/Email Channels/CreateEmailChannels";
import Webforms from "./Pages/Webforms/Webforms";
import TelephoneConnect from "./Pages/Telephone Channels/TelephoneConnect";
import AirtelConnect from "./Pages/Telephone Channels/AirtelConnect";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Homepage />} />
					<Route path="/dashboard" element={<Homepage />} />
					<Route path="/sales/leads" element={<Leads />} />
					<Route path="/sales/leads/create" element={<CreateNewLead />} />
					<Route path="/sales/leads/details" element={<DetailedLeads />} />
					<Route path="/customers/accounts" element={<CustomerAccount />} />
					<Route path="/customers/accounts/create" element={<CreateNewAccount />} />
					<Route path="/customers/accounts/details" element={<DetailedCustomerAccount />} />
					<Route path="/customers/contacts" element={<CustomerContact />} />
					<Route path="/customers/contacts/create" element={<CreateNewContact />} />
					<Route path="/customers/contacts/details" element={<DetailedCustomerContact />} />
					<Route path="/products/products" element={<Products />} />
					<Route path="/products/products/create" element={<CreateNewProduct />} />
					<Route path="/products/products/details" element={<DetailedProducts />} />
					<Route path="/products/productcategories" element={<ProductCategory />} />
					<Route path="/products/productcategories/create" element={<CreateNewCategory />} />
					<Route path="/products/productcategories/details" element={<DetailedProductCategory />} />
					<Route path="/sales/salesquotes" element={<SalesQuotes />} />
					<Route path="/sales/salesquotes/create" element={<CreateNewQuote />} />
					<Route path="/sales/salesquotes/details" element={<DetailedSalesQuotes />} />
					<Route path="/activitymanagement/tasks" element={<Tasks />} />
					<Route path="/activitymanagement/tasks/create" element={<CreateNewTask />} />
					<Route path="/activitymanagement/tasks/details" element={<DetailedTasks />} />
					<Route path="/activitymanagement/phonecalls" element={<PhoneCalls />} />
					<Route path="/activitymanagement/phonecalls/create" element={<CreateNewCall />} />
					<Route path="/activitymanagement/phonecalls/details" element={<DetailedPhoneCalls />} />
					<Route path="/activitymanagement/emails" element={<Emails />} />
					<Route path="/activitymanagement/emails/create" element={<CreateEmail />} />
					<Route path="/business-structure/org-hub" element={<OrganizationalStructure />} />
          			<Route path="/business-structure/org-hub/createNewOrg" element={<NewOrganizationalCreation />} />
          			<Route path="/business-structure/division" element={<Division />} />
          			<Route path="/service/tickets" element={<Tickets />} />
          			<Route path="/service/tickets/createTicket" element={<CreateTicket />} />
          			<Route path="/service/tickets/displayTicket" element={<DisplayTicket/>} />
					<Route path="/service/agentdesktop" element={<AgentSupport />} />
					<Route path="/service/knowledgebase" element={<KnowledgeBase />} />
					<Route path="/admin/generalsettings" element={<GeneralSettings />} />
					<Route path="/admin/accessmanagement" element={<AccessManagement />} />
					<Route path="/admin/accessmanagement/create" element={<CreateNewAccess />} />
					<Route path="/admin/workflows" element={<Workflow />} />
					<Route path="/admin/workflows/create" element={<CreateOrEditWorkflow />} />
					<Route path="/admin/userprofiles" element={<UserProfile />} />
					<Route path="/admin/userprofiles/create" element={<CreateUserProfile />} />
					<Route path="/admin/userprofiles/display" element={<DetailedUserProfile />} />
					<Route path="/channels/emails" element={<EmailChannels />} />
					<Route path="/channels/emails/create" element={<CreateEmailChannels />} />
					<Route path="/channels/webforms" element={<Webforms />} />
					<Route path="/channels/telephone" element={<TelephoneConnect />} />
					<Route path="/channels/telephone/airtel" element={<AirtelConnect />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
