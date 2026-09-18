/*
It lets you interact with the current operating system Node is running on so you
 can access vital information like the OS type, CPU details, available memory, 
 total memory, network interfaces, and more.
*/ 

const os = require("os");

//platform()
console.log(os.platform()); // linux



//arch() : cpu arquitecture
console.log(os.arch()); // arm64

//type())
console.log(os.type()); // Darwin (the core OS for macOS, iOS, and other Apple products)



//release() shows the system's OS kernel version
console.log(os.release()); // 25.0.0


console.log(os.version());
// Darwin Kernel Version 25.0.0: Wed Sep 17 21:41:39 PDT 2025;
// root:xnu-12377.1.9~141/RELEASE_ARM64_T8103



console.log(os.cpus());
/*
[
 {
   model: 'Apple M1',
   speed: 2400,
   times: { user: 2184260, nice: 0, sys: 1767340, idle: 8344200, irq: 0 }
 },
 {
   model: 'Apple M1',
   speed: 2400,
   times: { user: 2049430, nice: 0, sys: 1641050, idle: 8612980, irq: 0 }
 },
 {
   model: 'Apple M1',
   speed: 2400,
   times: { user: 1162300, nice: 0, sys: 1193390, idle: 9986140, irq: 0 }
 },
 ...
]
*/

// uptime() shows the time since the system was booted up.
console.log(os.uptime()); // 23047



// userInfo() returns an object containing information about the current system user:
console.log(os.userInfo());

/*
[Object: null prototype] {
 uid: 502,
 gid: 20,
 username: 'user',
 homedir: '/Users/user',
 shell: '/bin/zsh'
}
*/


// networkInterfaces() returns an object containing only network interfaces that have been assigned a network address.

console.log(os.networkInterfaces());
/*
{
  lo0: [
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8'
    },
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '::1/128',
      scopeid: 0
    }
  ],
  en0: [
    {
      address: '192.168.1.10',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: 'aa:bb:cc:dd:ee:ff',
      internal: false,
      cidr: '192.168.1.10/24'
    },
    {
      address: 'fe80::abcd:1234:5678:9abc',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: 'aa:bb:cc:dd:ee:ff',
      internal: false,
      cidr: 'fe80::abcd:1234:5678:9abc/64',
      scopeid: 2
    }
  ],
  // ...more network interfaces
};
*/