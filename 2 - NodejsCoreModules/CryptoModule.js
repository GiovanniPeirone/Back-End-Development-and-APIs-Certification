/**
 * crypto gives you low-level building blocks, not plug-and-play security. 
 * Writing your own encryption or authentication code
 *  can be unsafe if you're not careful. In most cases,
 *  it's best to use well-tested libraries like bcrypt
 *  for password hashing or jsonwebtoken (JWT) for handling logins and tokens.

That said, it's still useful to understand how some of the
 methods in the crypto module work.
 */


const crypto = require("crypto")

/*
The createHash() method creates a hash object
 by taking in algorithms like sha256, sha512, or md5. 
 It's a one-way operation, so you can't reverse it.

createHash() is useful for hashing passwords and fingerprinting files. 
To use it, you pass in your algorithm, use the update() method to feed in the data, 
and finally use digest() with an encoding to get the hash value:
*/


const hashedPassword = crypto
    .createHash(sha256)
    .update("myPassword")
    .digest("hex")


console.log(hashedPassword) //  f92c9cfa0ead1bcec05ca75888a4074ba994ad237e5e2a8c7cc6a620378c061d


/*
createHmac() does almost the same thing as createHash(), 
but it takes things to the next level by accepting a secret key, 
so only someone with that key can verify the hash. 
It is ideal for authentication and verifying data integrity:
*/

const hashedMessage = crypto
  .createHmac("sha256", "secretkey")
  .update("important-secret-message")
  .digest("hex");

console.log("createHmac result:", hashedMessage);


/*
The createCipheriv() and createDecipheriv() methods encrypt and decrypt data. 
They both take in an algorithm, a key, and an iv, which is a
 block of random or unique data used at the start of the encryption process:
*/


// A key must match the algorithm length. Here AES-256 is 32 bytes
const key = Buffer.from("12345678901234567890123456789012");

// A fixed IV, 16 bytes for AES
const iv = Buffer.from("1234567890123456");

const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);

let encrypted = cipher.update("Hello campers!", "utf8", "hex");
encrypted += cipher.final("hex");

console.log("Encrypted data:", encrypted);
// Encrypted data: 4ee93aa398ab44e3540e4a67ca96bc8c

// Decrypt the "Hello campers!" message
const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf8");
decrypted += decipher.final("utf8");

console.log("Decrypted data:", decrypted);
// Decrypted data: Hello campers!



/*
sign() creates a digital signature from some data using a private key. 
This signature proves that the data came from the holder of the private
 key and has not been tampered with.*/

/*
verify() then checks that signature, and it fails if the data or signature does not match.
*/

console.log("Random Bytes:", crypto.randomBytes(16));
// Random Bytes: <Buffer 01 88 aa 1e 2c 38 48 39 26 e1 6b a9 d8 c5 ed 49>


console.log("Random Bytes:", crypto.randomBytes(16).toString("hex"));
// Random Bytes: a6154ef5a296fa176ad0f332bd94d712


console.log("Random Int:", crypto.randomInt(0, 100)); // 89



const secret1 = crypto.createSecretKey(crypto.randomBytes(32));
console.log(secret); 
/**
SecretKeyObject [KeyObject] { [Symbol(kKeyType)]: 'secret' }
You can then use the export method to send out that KeyObject:*/


const secret2 = crypto.createSecretKey(crypto.randomBytes(32));
console.log(secret.export());
// <Buffer 53 06 a1 c7 75 69 8b 38 8b a4 b2 f7 1b bc b8
// ae e2 d1 bf 67 af 1a 6a 0a 6e a0 29 62 bb 52 52 32>


const secret3 = crypto.createSecretKey(crypto.randomBytes(32));
console.log(secret.export().toString('hex'));
// 32dfe5917668580160986f1623bf8152913329c71163be9c3404a110cd78efd6



/*
createPublicKey() and createPrivateKey() that lets you work with keys 
generated elsewhere

createDiffieHellman() for two parties to generate a s
hared secret without sending the secret directly

Certificate() for working with the one used in HTTPS, 
so you can parse, export, and verify certificate contents

*/