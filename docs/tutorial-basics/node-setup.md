---
sidebar_position: 3
---

# Node client setup

Download the latest client release:
 `wget https://github.com/neatios/client/releases/download/v2.2.3/neatio`

Set up the right privileges for the client with `chmod +x neatio`.

Run screen `./neatio` and wait to sync. Detach from screen with `CTRL + A + D`  . To reattach the screen use `screen -r`.


To import an existing wallet log into the Neatio console with `./neatio attach /root/.neatio/neatio/neatio.ipc`  
-> now while into the console type  `personal.importRawKey('WALLET_PRIVATE_KEY', 'ANY_PASSWORD')` . To exit from Neatio console, type  `exit`. 

### Generate your validator file
In the VPS terminal type `./neatio cvf YOUR_ADDRESS`

Validator `consensus_pub_key` is a 256 long string.  
Validator `consensus_priv_key` is a 64 long string.   

### Note
Copy the output as you will need it in the next step and is a good idea to also back it up.  



