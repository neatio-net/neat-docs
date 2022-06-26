---
sidebar_position: 2
---

# Cloud VPS setup 

## First let's find out What is VPS Hosting?

VPS hosting lets you accommodate web projects on your very own virtual machine. You get better performance thanks to the guaranteed hardware resources and a dedicated IP only you can use.

## Neatio VPS setup

For Neatio Validator you will need Linux distro. We recommend Ubuntu 20.04 since is havely tested by us and there are no issues running Neatio client on a Ubuntu 20.04 VPS.

## Access the server via SSH

Multiple communication protocols let you establish a connection to your VPS. With FTP, for example, you can upload, manage, and edit files. However, to properly configure your VPS, you need SSH (or Secure Shell) – a network protocol that lets you establish an encrypted connection to the server and execute commands on it.

SSH works solely through a command-line interface, and if your computer uses a Unix-based OS like Linux or macOS, you can use the Terminal to establish a connection.

In 2018, Microsoft integrated SSH into Windows PowerShell as well, and if you’re using an older version of Windows – you’ll need to use an SSH client like PuTTY.

Accessing the server via SSH for the first time requires the root login credentials provided by your host. 

The command you need to use is: **ssh USERNAME@YOUR_VPS_IP**. Usually your VPS username is ***root***

For example:
```
ssh root@123.123.123.123
```

The only thing you'll need to do after you log in, is to update the server.

For Ubuntu distro (also Debian) use the following command:

```
apt update
```

Now you are ready to go and run Neatio client on your VPS.
