# Flipdish ordering integration handover

Flipdish is the confirmed ordering provider. Please complete the public integration details below and paste the **exact embed snippet from the existing website** into the fenced block.

Do not add Flipdish account passwords, private API keys, bearer tokens, customer/order exports or other secrets to this file. If the current snippet appears to include a secret, redact its value and provide the intended deployment environment-variable name instead.

## Required details

- **Current public ordering URL:**
- **Flipdish restaurant/store/widget identifier:**
- **Does the widget support collection, delivery, or both?:**
- **Expected initial screen or menu:**
- **Preferred CTA wording:**
- **Preview domain allowlisted (`dolcivita.bhuwanpandit.me`)?:** yes / no / unknown
- **Production domain allowlisted (`dolcivita.co.uk`)?:** yes / no / unknown
- **Flipdish account owner/contact who can change domain settings:**
- **Known cookie/consent requirements supplied by Flipdish:**
- **Known analytics events/callbacks supplied by Flipdish:**
- **Anything that differs between preview and production:**

## Existing website embed snippet

Paste the snippet exactly as supplied by Flipdish or copied from the existing site:

```html
<!-- Paste the existing Flipdish embed snippet here. -->
```

## Acceptance checks

Once implemented, the integration will be checked for:

- successful loading on both preview and production domains;
- collection/delivery and menu navigation on mobile and desktop;
- keyboard operation, focus behaviour and an accessible region/title;
- a visible direct-order fallback if the script, iframe or network fails;
- absence of duplicate vendor-script loads during navigation;
- cookie/consent behaviour matching the approved policy;
- no secret credentials in generated browser HTML or JavaScript; and
- an end-to-end test order in Flipdish’s supported test mode, or the safest client-approved production test procedure.
