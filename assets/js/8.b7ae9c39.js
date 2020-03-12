(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{209:function(e,t,a){"use strict";a.r(t);var r=a(28),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"customer-managed-key-cmk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customer-managed-key-cmk"}},[e._v("#")]),e._v(" Customer-Managed Key (CMK)")]),e._v(" "),a("p",[e._v("Customer-Managed Key (CMK) or Bring your own key (BYOK) allows customers to configure customer-managed keys for Azure Container Registry (ACR) encryption. All customer-managed keys must be stored in an Azure Key Vault.")]),e._v(" "),a("p",[e._v("In this version of the API, you can create a new Premium container registry with CMK can be enabled using an Azure ARM template.")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note:")]),e._v(" The  CLI  and portal experience will light up soon.")])]),e._v(" "),a("h3",{attrs:{id:"current-limitations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#current-limitations"}},[e._v("#")]),e._v(" Current limitations")]),e._v(" "),a("ul",[a("li",[e._v("Disabling encryption for a registry will be supported in a future release.")]),e._v(" "),a("li",[e._v("Content-trust is not supported.")]),e._v(" "),a("li",[e._v("This feature is only enabled on a newly created registry.")])]),e._v(" "),a("h2",{attrs:{id:"whitelist-your-subscription-to-use-the-feature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#whitelist-your-subscription-to-use-the-feature"}},[e._v("#")]),e._v(" Whitelist your subscription to use the feature")]),e._v(" "),a("p",[e._v("At this time, you must request access to use this capability. To do so, please contact acrsup@microsoft.com.")]),e._v(" "),a("h2",{attrs:{id:"deploy-a-registry-with-cmk-enabled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy-a-registry-with-cmk-enabled"}},[e._v("#")]),e._v(" Deploy a registry with CMK enabled")]),e._v(" "),a("p",[e._v("Follow these steps to create a registry with CMK enabled using an ARM template. Note that we will create a Key Vault and Key using CLI as we do not have ARM support for these scenarios.")]),e._v(" "),a("h3",{attrs:{id:"_1-create-a-resource-group"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-a-resource-group"}},[e._v("#")]),e._v(" 1. Create a resource group")]),e._v(" "),a("p",[e._v("Create a resource group for creating the Key Vault and Keys.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("az group create -g "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("resource-group-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -l "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("location"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-create-a-key-vault"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-create-a-key-vault"}},[e._v("#")]),e._v(" 2. Create a key vault")]),e._v(" "),a("p",[e._v("Create a key vault to store customer-managed keys for registry encryption. This key vault should have two key protection settings enabled - Soft Delete and Do Not Purge.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("az keyvault create --name "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("key-vault-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -g "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("resource-group-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --enable-soft-delete --enable-purge-protection\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"_3-create-a-key-and-get-the-key-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-create-a-key-and-get-the-key-id"}},[e._v("#")]),e._v(" 3. Create a key and get the key ID")]),e._v(" "),a("p",[e._v("Create a key and get the full key ID.")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note:")]),e._v(" if you skip the step because you have an existing key, make sure use a full key ID with version")])]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("KEK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("az keyvault key create --name "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("key-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --vault-name "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("key-vault-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --query key.kid -o tsv"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"_4-create-a-registry-with-cmk-enabled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-create-a-registry-with-cmk-enabled"}},[e._v("#")]),e._v(" 4. Create a registry with CMK enabled")]),e._v(" "),a("p",[e._v("Download the "),a("a",{attrs:{href:"https://github.com/Azure/acr/blob/master/docs/CMK/template.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("template.json file"),a("OutboundLink")],1),e._v(". Run the following command to create a registry with CMK enabled. Note that you need to provide the key vault name that you just created. Registry and user assigned managed identity will be created by the template.")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("az group deployment create -g "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("resource-group-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --template-file "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("template.json"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --parameters "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("vault_name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("key-vault-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("registry_name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("registry-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("identity_name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("managed-identity"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("kek_id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$KEK")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"_5-key-rotation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-key-rotation"}},[e._v("#")]),e._v(" 5. Key rotation")]),e._v(" "),a("p",[e._v("You can rotate keys by creating a new key using step 3 and then using the new key in step 4 mentioned above.")]),e._v(" "),a("h3",{attrs:{id:"_6-view-registry-encryption-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-view-registry-encryption-settings"}},[e._v("#")]),e._v(" 6. View registry encryption settings")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("az resource show --id "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("registry-resource-id"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --query properties.encryption --api-version "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2019")]),e._v("-12-01-preview\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"login-and-use-the-registry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#login-and-use-the-registry"}},[e._v("#")]),e._v(" Login and use the registry")]),e._v(" "),a("h3",{attrs:{id:"_1-login-to-your-registry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-login-to-your-registry"}},[e._v("#")]),e._v(" 1. Login to your registry")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v("az acr login -n myacr\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Follow "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/container-registry/container-registry-authentication",target:"_blank",rel:"noopener noreferrer"}},[e._v("this documentation"),a("OutboundLink")],1),e._v(" for authenticate your docker client to your container registry.")]),e._v(" "),a("h3",{attrs:{id:"_2-push-images-to-your-registry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-push-images-to-your-registry"}},[e._v("#")]),e._v(" 2. Push images to your registry")]),e._v(" "),a("p",[e._v("For pushing docker images on your registry, follow "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("this documentation"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"feedback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feedback"}},[e._v("#")]),e._v(" Feedback")]),e._v(" "),a("p",[e._v("For feedback on CMK, visit https://aka.ms/acr/issues.")])])}),[],!1,null,null,null);t.default=s.exports}}]);