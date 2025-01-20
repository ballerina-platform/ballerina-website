# Specification: Ballerina Crypto Library

_Owners_: @shafreenAnfar @bhashinee  
_Reviewers_: @shafreenAnfar  
_Created_: 2022/08/23  
_Updated_: 2024/03/26  
_Edition_: Swan Lake  

## Introduction

This is the specification for the Crypto standard library of [Ballerina language](https://ballerina.io/), which provides Crypto functionalities.

The Crypto library specification has evolved and may continue to evolve in the future. The released versions of the specification can be found under the relevant GitHub tag.

If you have any feedback or suggestions about the library, start a discussion via a [GitHub issue](https://github.com/ballerina-platform/ballerina-standard-library/issues) or in the [Discord server](https://discord.gg/ballerinalang). Based on the outcome of the discussion, the specification and implementation can be updated. Community feedback is always welcome. Any accepted proposal, which affects the specification is stored under `/docs/proposals`. Proposals under discussion can be found with the label `type/proposal` in GitHub.

The conforming implementation of the specification is released and included in the distribution. Any deviation from the specification is considered a bug.

## Contents
1. [Overview](#1-overview)
2. [Hash](#2-hash)
   * 2.1. [MD5](#21-md5)
   * 2.2. [SHA1](#22-sha1)
   * 2.3. [SHA256](#23-sha256)
   * 2.4. [SHA384](#24-sha384)
   * 2.5. [SHA512](#25-sha512)
   * 2.6. [CRC32B](#26-crc32b)
3. [HMAC](#3-hmac)
   * 3.1. [MD5](#31-md5)
   * 3.2. [SHA1](#32-sha1)
   * 3.3. [SHA256](#33-sha256)
   * 3.4. [SHA384](#34-sha384)
   * 3.5. [SHA512](#35-sha512)
4. [Decode private/public key](#4-decode-private-public-keys)
   * 4.1. [Decode RSA Private key from PKCS12 file](#41-rsa-decode-private-key-from-pkcs12-file)
   * 4.2. [Decode RSA Private key using Private key and Password](#42-decode-rsa-private-key-using-private-key-and-password)
   * 4.3. [Decode RSA Private key using Private key content and Password](#43-decode-rsa-private-key-using-private-key-content-and-password)
   * 4.4. [Decode RSA Public key from PKCS12 file](#44-decode-rsa-public-key-from-pkcs12-file)
   * 4.5. [Decode RSA Public key from the certificate file](#45-decode-rsa-public-key-from-the-certificate-file)
   * 4.6. [Decode RSA Public key from the certificate content](#46-decode-rsa-public-key-from-the-certificate-content)
   * 4.7. [Decode EC Private key from PKCS12 file](#47-decode-ec-private-key-from-pkcs12-file)
   * 4.8. [Decode EC Private key using Private key and Password](#48-decode-ec-private-key-using-private-key-and-password)
   * 4.9. [Decode EC Public key from PKCS12 file](#49-decode-ec-public-key-from-pkcs12-file)
   * 4.10. [Decode EC Public key from the certificate file](#410-decode-ec-public-key-from-the-certificate-file)
   * 4.11. [Build RSA Public key from modulus and exponent parameters](#411-build-rsa-public-key-from-modulus-and-exponent-parameters)
   * 4.12. [Decode ML-DSA-65 Private key from PKCS12 file](#412-decode-ml-dsa-65-private-key-from-pkcs12-file)
   * 4.13. [Decode ML-DSA-65 Private key using Private key and Password](#413-decode-ml-dsa-65-private-key-using-private-key-and-password)
   * 4.14. [Decode ML-DSA-65 Public key from PKCS12 file](#414-decode-ml-dsa-65-public-key-from-pkcs12-file)
   * 4.15. [Decode ML-DSA-65 Public key from the certificate file](#415-decode-ml-dsa-65-public-key-from-the-certificate-file)
   * 4.16. [Decode ML-KEM-768 Private key from PKCS12 file](#416-decode-ml-kem-768-private-key-from-pkcs12-file)
   * 4.17. [Decode ML-KEM-768 Private key using Private key and Password](#417-decode-ml-kem-768-private-key-using-private-key-and-password)
   * 4.18. [Decode ML-KEM-768 Public key from PKCS12 file](#418-decode-ml-kem-768-public-key-from-pkcs12-file)
   * 4.19. [Decode ML-KEM-768 Public key from the certificate file](#419-decode-ml-kem-768-public-key-from-the-certificate-file)
5. [Encrypt-Decrypt](#5-encrypt-decrypt)   
   * 5.1. [Encryption](#51-encryption)
     * 5.1.1. [RSA](#511-rsa)
     * 5.1.2. [AES-CBC](#512-aes-cbc)
     * 5.1.3. [AES-ECB](#513-aes-ecb)
     * 5.1.4. [AES-GCM](#514-aes-gcm)
     * 5.1.5. [PGP](#515-pgp)
   * 5.2. [Decryption](#52-decryption)
     * 5.2.1. [RSA-ECB](#521-rsa-ecb)
     * 5.2.2. [AES-CBC](#522-aes-cbc)
     * 5.2.3. [AES-ECB](#523-aes-ecb)
     * 5.2.4. [AES-GCM](#524-aes-gcm)
     * 5.2.5. [PGP](#525-pgp)
6. [Sign and Verify](#6-sign-and-verify)
    * 6.1. [Sign messages](#61-sign-messages)
      * 6.1.1. [RSA-MD5](#611-rsa-md5)
      * 6.1.2. [RSA-SHA1](#612-rsa-sha1)
      * 6.1.3. [RSA-SHA256](#613-rsa-sha256)
      * 6.1.4. [RSA-SHA384](#614-rsa-sha384)
      * 6.1.5. [RSA-SHA512](#615-rsa-sha512)
      * 6.1.6. [SHA384withECDSA](#616-sha384withecdsa)
      * 6.1.7. [SHA256withECDSA](#617-sha256withecdsa)
      * 6.1.8. [ML-DSA-65](#618-mldsa65)
   * 6.2. [Verify signature](#62-verify-signature)
       * 6.2.1. [RSA-MD5](#621-rsa-md5)
       * 6.2.2. [RSA-SHA1](#622-rsa-sha1)
       * 6.2.3. [RSA-SHA256](#623-rsa-sha256)
       * 6.2.4. [RSA-SHA384](#624-rsa-sha384)
       * 6.2.5. [RSA-SHA512](#625-rsa-sha512)
       * 6.2.6. [SHA384withECDSA](#626-sha384withecdsa)
       * 6.2.7. [SHA256withECDSA](#627-sha256withecdsa)
       * 6.2.8. [ML-DSA-65](#618-mldsa65)
7. [Key Derivation Function (KDF)](#7-key-derivation-function-kdf)
    * 7.1. [HKDF-SHA256](#71-hkdf-sha256)
8. [Key Exchange Mechanism (KEM)](#8-key-exchange-mechanism-kem)
    * 8.1 [Encapsulation](#81-encapsulation)
       * 8.1.1 [RSA-KEM](#811-rsa-kem)
       * 8.1.2 [ML-KEM-768](#812-ml-kem-768)
       * 8.1.3 [RSA-KEM-ML-KEM-768](#813-rsa-kem-ml-kem-768)
    * 8.2 [Decapsulation](#81-encapsulation)
       * 8.2.1 [RSA-KEM](#821-rsa-kem)
       * 8.2.2 [ML-KEM-768](#822-ml-kem-768)
       * 8.2.3 [RSA-KEM-ML-KEM-768](#823-rsa-kem-ml-kem-768)
9. [Hybrid Public Key Encryption (HPKE)](#9-hybrid-public-key-encryption-hpke)
    * 9.1 [Encrypt](#91-encrypt)
       * 9.1.1 [ML-KEM-768-HPKE](#911-ml-kem-768-hpke)
       * 9.1.2 [RSA-KEM-ML-KEM-768-HPKE](#912-rsa-kem-ml-kem-768-hpke)
    * 9.2 [Decrypt](#92-decrypt)
       * 9.2.1 [ML-KEM-768-HPKE](#921-ml-kem-768-hpke)
       * 9.2.2 [RSA-KEM-ML-KEM-768-HPKE](#922-rsa-kem-ml-kem-768-hpke)
10. [Password hashing](#10-password-hashing)
    * 10.1 [BCrypt](#101-bcrypt)
    * 10.2 [Argon2](#102-argon2)

       
## 1. [Overview](#1-overview)

The Ballerina `crypto` library facilitates APIs to do operations like hashing, HMAC generation, checksum generation, encryption, decryption, signing data digitally, verifying digitally signed data, etc., with different cryptographic algorithms.

## 2. [Hash](#2-hash)

The `crypto` library supports generating hashes with 5 different hash algorithms MD5, SHA1, SHA256, SHA384, and SHA512. Also, it supports generating the CRC32B checksum.

### 2.1. [MD5](#21-md)

This API can be used to create the MD5 hash of the given data.
```ballerina
string dataString = "Hello Ballerina";
byte[] data = dataString.toBytes();
byte[] hash = crypto:hashMd5(data);
```

### 2.2. [SHA1](#22-sha1)

This API can be used to create the SHA-1 hash of the given data.
```ballerina
string dataString = "Hello Ballerina";
byte[] data = dataString.toBytes();
byte[] hash = crypto:hashSha1(data);
```

### 2.3. [SHA256](#23-sha256)

This API can be used to create the SHA-256 hash of the given data.
```ballerina
string dataString = "Hello Ballerina";
byte[] data = dataString.toBytes();
byte[] hash = crypto:hashSha256(data);
```

### 2.4. [SHA384](#24-sha384)

This API can be used to create the SHA-384 hash of the given data.
```ballerina
string dataString = "Hello Ballerina";
byte[] data = dataString.toBytes();
byte[] hash = crypto:hashSha384(data);
```

### 2.5. [SHA512](#25-sha512)

This API can be used to create the SHA-512 hash of the given data.
```ballerina
string dataString = "Hello Ballerina";
byte[] data = dataString.toBytes();
byte[] hash = crypto:hashSha512(data);
```

### 2.6. [CRC32B](#26-crc32b)

This API can be used to create the Hex-encoded CRC32B value of the given data.
```ballerina
string stringData = "Hello Ballerina";
byte[] data = stringData.toBytes();
string checksum = crypto:crc32b(data);
```

## 3. [HMAC](#3-hmac)

The `crypto` library supports generating HMAC with 5 different hash algorithms: MD5, SHA1, SHA256, SHA384, and SHA512.

### 3.1. [MD5](#31-md5)

This API can be used to create HMAC using the MD5 hash function of the given data.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
string secret = "some-secret";
byte[] key = secret.toBytes();
byte[] hmac = check crypto:hmacMd5(data, key);
```

### 3.2. [SHA1](#32-sha1)

This API can be used to create HMAC using the SHA-1 hash function of the given data.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
string secret = "some-secret";
byte[] key = secret.toBytes();
byte[] hmac = crypto:hmacSha1(data, key);
```

### 3.3. [SHA256](#33-sha256)

This API can be used to create HMAC using the SHA-256 hash function of the given data.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
string secret = "some-secret";
byte[] key = secret.toBytes();
byte[] hmac = check crypto:hmacSha256(data, key);
```

### 3.4. [SHA384](#34-sha384)

This API can be used to create HMAC using the SHA-384 hash function of the given data.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
string secret = "some-secret";
byte[] key = secret.toBytes();
byte[] hmac = check crypto:hmacSha384(data, key);
```

### 3.5. [SHA512](#35-sha512)

This API can be used to create HMAC using the SHA-512 hash function of the given data.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
string secret = "some-secret";
byte[] key = secret.toBytes();
byte[] hmac = check crypto:hmacSha512(data, key);
```

## 4. [Decode private/public key](#4-decode-private-public-keys)

The `crypto` library supports decoding the RSA private key from a `.p12` file and a key file in the `PEM` format. Also, it supports decoding a public key from a `.p12` file and a certificate file in the `X509` format. Additionally, this supports building an RSA public key with the modulus and exponent parameters.

### 4.1. [Decode RSA Private key from PKCS12 file](#41-rsa-decode-private-key-from-pkcs12-file)

This API can be used to decode the RSA private key from the given PKCS#12 file.

```ballerina
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PrivateKey privateKey = check crypto:decodeRsaPrivateKeyFromKeyStore(keyStore, "keyAlias", "keyPassword");
```

### 4.2. [Decode RSA Private key using Private key and Password](#42-decode-rsa-private-key-using-private-key-and-password)

This API can be used to decode the RSA private key from the given private key and private key password.

```ballerina
string keyFile = "/path/to/private.key";
crypto:PrivateKey privateKey = check crypto:decodeRsaPrivateKeyFromKeyFile(keyFile, "keyPassword");
```

4.3. [Decode RSA Private key using Private key content and Password](#43-decode-rsa-private-key-using-private-key-content-and-password)

This API can be used to decode the RSA public key from the given public certificate content as a byte array.

```ballerina
byte[] keyContent = [45,45,45,45,45,66,69,71,73,78,...];
crypto:PrivateKey privateKey = check crypto:decodeRsaPrivateKeyFromContent(keyContent);
```

### 4.4. [Decode RSA Public key from PKCS12 file](#44-decode-rsa-public-key-from-pkcs12-file)

This API can be used to decode the RSA public key from the given PKCS#12 archive file.

```ballerina
crypto:TrustStore trustStore = {
    path: "/path/tp/truststore.p12",
    password: "truststorePassword"
};
crypto:PublicKey publicKey = check crypto:decodeRsaPublicKeyFromTrustStore(trustStore, "keyAlias");
```

### 4.5. [Decode RSA Public key from the certificate file](#45-decode-rsa-public-key-from-the-certificate-file)

This API can be used to decode the RSA public key from the given public certificate file.

```ballerina
string certFile = "/path/to/public.cert";
crypto:PublicKey publicKey = check crypto:decodeRsaPublicKeyFromCertFile(certFile);
```

### 4.6. [Decode RSA Public key from the certificate content](#46-decode-rsa-public-key-from-the-certificate-content)

This API can be used to decode the RSA public key from the given public certificate content as a byte array.

```ballerina
byte[] certFileContent = [45,45,45,45,45,66,69,71,73,78,...];
crypto:PublicKey publicKey = check crypto:decodeRsaPublicKeyFromContent(certFileContent);
```

### 4.7. [Decode EC Private key from PKCS12 file](#47-decode-ec-private-key-from-pkcs12-file)

This API can be used to decode the EC private key from the given PKCS#12 file.

```ballerina
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PrivateKey privateKey = check crypto:decodeEcPrivateKeyFromKeyStore(keyStore, "keyAlias", "keyPassword");
```

### 4.8. [Decode EC Private key using Private key and Password](#48-decode-ec-private-key-using-private-key-and-password)

This API can be used to decode the EC private key from the given private key and private key password.

```ballerina
string keyFile = "/path/to/private.key";
crypto:PrivateKey privateKey = check crypto:decodeEcPrivateKeyFromKeyFile(keyFile, "keyPassword");
```

### 4.9. [Decode EC Public key from PKCS12 file](#49-decode-ec-public-key-from-pkcs12-file)

This API can be used to decode the RSA public key from the given PKCS#12 archive file.

```ballerina
crypto:TrustStore trustStore = {
    path: "/path/tp/truststore.p12",
    password: "truststorePassword"
};
crypto:PublicKey publicKey = check crypto:decodeEcPublicKeyFromTrustStore(trustStore, "keyAlias");
```

### 4.10. [Decode EC Public key from the certificate file](#410-decode-ec-public-key-from-the-certificate-file)

This API can be used to decode the EC public key from the given public certificate file.

```ballerina
string certFile = "/path/to/public.cert";
crypto:PublicKey publicKey = check crypto:decodeEcPublicKeyFromCertFile(certFile);
```

### 4.11. [Build RSA Public key from modulus and exponent parameters](#411-build-rsa-public-key-from-modulus-and-exponent-parameters)

This API can be used to build the RSA public key from the given modulus and exponent parameters.

```ballerina
string modulus = "luZFdW1ynitztkWLC6xKegbRWxky-5P0p4ShYEOkHs30QI2VCuR6Qo4Bz5rTgLBrky03W1GAVrZxuvKRGj9V9-" +
        "PmjdGtau4CTXu9pLLcqnruaczoSdvBYA3lS9a7zgFU0-s6kMl2EhB-rk7gXluEep7lIOenzfl2f6IoTKa2fVgVd3YKiSGsy" +
        "L4tztS70vmmX121qm0sTJdKWP4HxXyqK9neolXI9fYyHOYILVNZ69z_73OOVhkh_mvTmWZLM7GM6sApmyLX6OXUp8z0pkY-v" +
        "T_9-zRxxQs7GurC4_C1nK3rI_0ySUgGEafO1atNjYmlFN-M3tZX6nEcA6g94IavyQ";
string exponent = "AQAB";
crypto:PublicKey publicKey = check crypto:buildRsaPublicKey(modulus, exponent);
```

### 4.12. [Decode ML-DSA-65 Private key from PKCS12 file](#412-decode-ml-dsa-65-private-key-from-pkcs12-file)

This API can be used to decode the ML-DSA-65 private key from the given PKCS#12 file.

```ballerina
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password
};
crypto:PrivateKey privateKey = check crypto:decodeMlDsa65PrivateKeyFromKeyStore(keyStore, "keyAlias", "keyPassword");
```

### 4.13. [Decode ML-DSA-65 Private key using Private key and Password](#413-decode-ml-dsa-65-private-key-using-private-key-and-password)

This API can be used to decode the ML-DSA-65 private key from the given private key and private key password.

```ballerina
string keyFile = "/path/to/private.key";
crypto:PrivateKey privateKey = check crypto:decodeMlDsa65PrivateKeyFromKeyFile(keyFile, "keyPassword");
```

### 4.14. [Decode ML-DSA-65 Public key from PKCS12 file](#414-decode-ml-dsa-65-public-key-from-pkcs12-file)

This API can be used to decode the ML-DSA-65 public key from the given PKCS#12 archive file.

```ballerina
crypto:TrustStore trustStore = {
    path: "/path/tp/truststore.p12",
    password: "truststorePassword"
};
crypto:PublicKey publicKey = check crypto:decodeMlDsa65PublicKeyFromTrustStore(trustStore, "keyAlias");
```

### 4.15. [Decode ML-DSA-65 Public key from the certificate file](#415-decode-ml-dsa-65-public-key-from-the-certificate-file)

This API can be used to decode the ML-DSA-65 public key from the given public certificate file.

```ballerina
string certFile = "/path/to/public.cert";
crypto:PublicKey publicKey = check crypto:decodeMlDsa65PublicKeyFromCertFile(certFile);
```

### 4.16. [Decode ML-KEM-768 Private key from PKCS12 file](#416-decode-ml-kem-768-private-key-from-pkcs12-file)

This API can be used to decode the ML-KEM-768 private key from the given PKCS#12 file.

```ballerina
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password
};
crypto:PrivateKey privateKey = check crypto:decodeMlKem768PrivateKeyFromKeyStore(keyStore, "keyAlias", "keyPassword");
```

### 4.17. [Decode ML-KEM-768 Private key using Private key and Password](#417-decode-ml-kem-768-private-key-using-private-key-and-password)

This API can be used to decode the ML-KEM-768 private key from the given private key and private key password.

```ballerina
string keyFile = "/path/to/private.key";
crypto:PrivateKey privateKey = check crypto:decodeMlKem768PrivateKeyFromKeyFile(keyFile, "keyPassword");
```

### 4.18. [Decode ML-KEM-768 Public key from PKCS12 file](#418-decode-ml-kem-768-public-key-from-pkcs12-file)

This API can be used to decode the ML-KEM-768 public key from the given PKCS#12 archive file.

```ballerina
crypto:TrustStore trustStore = {
    path: "/path/tp/truststore.p12",
    password: "truststorePassword"
};
crypto:PublicKey publicKey = check crypto:decodeMlKem768PublicKeyFromTrustStore(trustStore, "keyAlias");
```

### 4.19. [Decode ML-KEM-768 Public key from the certificate file](#419-decode-ml-kem-768-public-key-from-the-certificate-file)

This API can be used to decode the ML-KEM-768 public key from the given public certificate file.

```ballerina
string certFile = "/path/to/public.cert";
crypto:PublicKey publicKey = check crypto:decodeMlKem768PublicKeyFromCertFile(certFile);
```

## 5. [Encrypt-Decrypt](#5-encrypt-decrypt) 

The `crypto` library supports both symmetric key encryption/decryption and asymmetric key encryption/decryption. The RSA algorithm can be used for asymmetric-key encryption/decryption with the use of private and public keys. The AES algorithm can be used for symmetric-key encryption/decryption with the use of a shared key.

### 5.1. [Encryption](#51-encryption)

#### 5.1.1. [RSA](#511-rsa)

This API can be used to create the RSA-encrypted value of the given data.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PublicKey publicKey = check crypto:decodeRsaPublicKeyFromTrustStore(keyStore, "keyAlias");
byte[] cipherText = check crypto:encryptRsaEcb(data, publicKey);
```

#### 5.1.2. [AES-CBC](#512-aes-cbc)

This API can be used to create the AES-CBC-encrypted value for the given data.

```ballerina
string dataString = "Hello Ballerina!";
byte[] data = dataString.toBytes();
byte[16] key = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
foreach int i in 0...15 {
    key[i] = <byte>(check random:createIntInRange(0, 255));
}
byte[16] initialVector = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
foreach int i in 0...15 {
    initialVector[i] = <byte>(check random:createIntInRange(0, 255));
}
byte[] cipherText = check crypto:encryptAesCbc(data, key, initialVector);
```

#### 5.1.3. [AES-ECB](#513-aes-ecb)

This API can be used to create the AES-ECB-encrypted value for the given data.

```ballerina
string dataString = "Hello Ballerina!";
byte[] data = dataString.toBytes();
byte[16] key = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
foreach int i in 0...15 {
    key[i] = <byte>(check random:createIntInRange(0, 255));
}
byte[] cipherText = check crypto:encryptAesEcb(data, key);
```

#### 5.1.4. [AES-GCM](#514-aes-gcm)

This API can be used to create the AES-GCM-encrypted value for the given data.

```ballerina
string dataString = "Hello Ballerina!";
byte[] data = dataString.toBytes();
byte[16] key = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
foreach int i in 0...15 {
    key[i] = <byte>(check random:createIntInRange(0, 255));
}
byte[16] initialVector = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
foreach int i in 0...15 {
    initialVector[i] = <byte>(check random:createIntInRange(0, 255));
}
byte[] cipherText = check crypto:encryptAesGcm(data, key, initialVector);
```

#### 5.1.5. [PGP](#515-pgp)

This API can be used to create the PGP-encrypted value for the given data.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
string publicKeyPath = "/path/to/publickey.asc";

byte[] cipherText = check crypto:encryptPgp(data, publicKeyPath);
```

The following encryption options can be configured in the PGP encryption.

| Option                | Description                                                       | Default Value |
|-----------------------|-------------------------------------------------------------------|---------------|
| compressionAlgorithm  | Specifies the compression algorithm used for PGP encryption       | ZIP           |
| symmetricKeyAlgorithm | Specifies the symmetric key algorithm used for encryption         | AES_256       |
| armor                 | Indicates whether ASCII armor is enabled for the encrypted output | true          |
| withIntegrityCheck    | Indicates whether integrity check is included in the encryption   | true          |

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
string publicKeyPath = "/path/to/publickey.asc";

byte[] cipherText = check crypto:encryptPgp(data, publicKeyPath, armor = false);
```

In addition to the above, the following API can be used to read a content from a stream, encrypt it using the PGP public
key and return an encrypted stream

```ballerina
stream<byte[], error?> inputStream = check io:fileReadBlocksAsStream("input.txt");
stream<byte[], crypto:Error?>|crypto:Error encryptedStream = crypto:encryptStreamAsPgp(inputStream, "public_key.asc");
```

### 5.2. [Decryption](#52-decryption)

#### 5.2.1. [RSA-ECB](#521-rsa-ecb)

This API can be used to create the RSA-decrypted value for the given RSA-encrypted data.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PublicKey publicKey = check crypto:decodeRsaPublicKeyFromTrustStore(keyStore, "keyAlias");
crypto:PrivateKey privateKey = check crypto:decodeRsaPrivateKeyFromKeyStore(keyStore, "keyAlias", "keyPassword");
byte[] cipherText = check crypto:encryptRsaEcb(data, publicKey);
byte[] plainText = check crypto:decryptRsaEcb(cipherText, privateKey);
```

#### 5.2.2. [AES-CBC](#522-aes-cbc)

This API can be used to create the AES-CBC-decrypted value for the given AES-CBC-encrypted data.

```ballerina
string dataString = "Hello Ballerina!";
byte[] data = dataString.toBytes();
byte[16] key = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
foreach int i in 0...15 {
    key[i] = <byte>(check random:createIntInRange(0, 255));
}
byte[16] initialVector = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
foreach int i in 0...15 {
    initialVector[i] = <byte>(check random:createIntInRange(0, 255));
}
byte[] cipherText = check crypto:encryptAesCbc(data, key, initialVector);
byte[] plainText = check crypto:decryptAesCbc(cipherText, key, initialVector);
```

#### 5.2.3. [AES-ECB](#523-aes-ecb)

This API can be used to create the AES-ECB-decrypted value for the given AES-ECB-encrypted data.

```ballerina
string dataString = "Hello Ballerina!";
byte[] data = dataString.toBytes();
byte[16] key = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
foreach int i in 0...15 {
    key[i] = <byte>(check random:createIntInRange(0, 255));
}
byte[] cipherText = check crypto:encryptAesEcb(data, key);
byte[] plainText = check crypto:decryptAesEcb(cipherText, key);
```

#### 5.2.4. [AES-GCM](#524-aes-gcm)

This API can be used to create the AES-GCM-decrypted value for the given AES-GCM-encrypted data.

```ballerina
string dataString = "Hello Ballerina!";
byte[] data = dataString.toBytes();
byte[16] key = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
foreach int i in 0...15 {
    key[i] = <byte>(check random:createIntInRange(0, 255));
}
byte[16] initialVector = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
foreach int i in 0...15 {
    initialVector[i] = <byte>(check random:createIntInRange(0, 255));
}
byte[] cipherText = check crypto:encryptAesGcm(data, key, initialVector);
byte[] plainText = check crypto:decryptAesGcm(cipherText, key, initialVector);
```

#### 5.2.5. [PGP](#525-pgp)

This API can be used to create the PGP-decrypted value for the given PGP-encrypted data.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
string publicKeyPath = "/path/to/publickey.asc";
string privateKeyPath = "/path/to/privatekey.asc";
string passPhrase = "passphrase";

byte[] cipherText = check crypto:encryptPgp(data, publicKeyPath);
byte[] plainText = check crypto:decryptPgp(cipherText, privateKeyPath, passPhrase.toBytes());
```

In addition to the above, the following API can be used to read an encrypted content from a stream, decrypt it using the
PGP private key and passphrase and return a decrypted stream.

```ballerina
stream<byte[], error?> inputStream = check io:fileReadBlocksAsStream("pgb_encrypted.txt");
stream<byte[], crypto:Error?>|crypto:Error decryptedStream = crypto:decryptStreamFromPgp(inputStream, "private_key.asc", passphrase);
```

## 6. [Sign and Verify](#6-sign-and-verify)

The `crypto` library supports signing data using the RSA private key and verification of the signature using the RSA public key. This supports MD5, SHA1, SHA256, SHA384, and SHA512 digesting algorithms, and ML-DSA-65 post-quantum signature algorithm as well.

### 6.1. [Sign messages](#51-sign-messages)

#### 6.1.1. [RSA-MD5](#611-rsa-md5)

This API can be used to create the RSA-MD5 based signature value for the given data.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PrivateKey privateKey = check crypto:decodeRsaPrivateKeyFromKeyStore(keyStore, "keyAlias", "keyPassword");
byte[] signature = check crypto:signRsaMd5(data, privateKey);
```

#### 6.1.2. [RSA-SHA1](#612-rsa-sha1)

This API can be used to create the RSA-SHA1 based signature value for the given data.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PrivateKey privateKey = check crypto:decodeRsaPrivateKeyFromKeyStore(keyStore, "keyAlias", "keyPassword");
byte[] signature = check crypto:signRsaSha1(data, privateKey);
```

#### 6.1.3. [RSA-SHA256](#613-rsa-sha256)

This API can be used to create the RSA-SHA256 based signature value for the given data.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PrivateKey privateKey = check crypto:decodeRsaPrivateKeyFromKeyStore(keyStore, "keyAlias", "keyPassword");
byte[] signature = check crypto:signRsaSha256(data, privateKey);
```

#### 6.1.4. [RSA-SHA384](#614-rsa-sha384)

This API can be used to create the RSA-SHA384 based signature value for the given data.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PrivateKey privateKey = check crypto:decodeRsaPrivateKeyFromKeyStore(keyStore, "keyAlias", "keyPassword");
byte[] signature = check crypto:signRsaSha384(data, privateKey);
```

#### 6.1.5. [RSA-SHA512](#615-rsa-sha512)

This API can be used to create the RSA-SHA512 based signature value for the given data.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PrivateKey privateKey = check crypto:decodeRsaPrivateKeyFromKeyStore(keyStore, "keyAlias", "keyPassword");
byte[] signature = check crypto:signRsaSha512(data, privateKey);
```

#### 6.1.6. [SHA384withECDSA](#616-sha384withecdsa)

This API can be used to create the SHA384withECDSA based signature value for the given data.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PrivateKey privateKey = check crypto:decodeEcPrivateKeyFromKeyStore(keyStore, "keyAlias", "keyPassword");
byte[] signature = check crypto:signSha384withEcdsa(data, privateKey);
```

#### 6.1.7. [SHA256withECDSA](#617-sha256withecdsa)

This API can be used to create the SHA256withECDSA based signature value for the given data.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PrivateKey privateKey = check crypto:decodeEcPrivateKeyFromKeyStore(keyStore, "keyAlias", "keyPassword");
byte[] signature = check crypto:signSha256withEcdsa(data, privateKey);
```

#### 6.1.8. [ML-DSA-65](#618-mldsa65)

This API can be used to create the ML-DSA-65 based signature value for the given data.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PrivateKey privateKey = check crypto:decodeMlDsa65PrivateKeyFromKeyStore(keyStore, "keyAlias", "keyPassword");
byte[] signature = check crypto:signMlDsa65(data, privateKey);
```

### 6.2. [Verify signature](#62-verify-signature)

#### 6.2.1. [RSA-MD5](#621-rsa-md5)

This API can be used to verify the RSA-MD5 based signature.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PrivateKey privateKey = check crypto:decodeRsaPrivateKeyFromKeyStore(keyStore, "keyAlias", "keyPassword")
byte[] signature = check crypto:signRsaMd5(data, privateKey);
crypto:PublicKey publicKey = check crypto:decodeRsaPublicKeyFromTrustStore(keyStore, "keyAlias");
boolean validity = check crypto:verifyRsaMd5Signature(data, signature, publicKey);
```

#### 6.2.2. [RSA-SHA1](#622-rsa-sha1)

This API can be used to verify the RSA-SHA1 based signature.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PrivateKey privateKey = check crypto:decodeRsaPrivateKeyFromKeyStore(keyStore, "keyAlias", "keyPassword");
byte[] signature = check crypto:signRsaSha1(data, privateKey);
crypto:PublicKey publicKey = check crypto:decodeRsaPublicKeyFromTrustStore(keyStore, "keyAlias");
boolean validity = check crypto:verifyRsaSha1Signature(data, signature, publicKey);
```

#### 6.2.3. [RSA-SHA256](#623-rsa-sha256)

This API can be used to verify the RSA-SHA256 based signature.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PrivateKey privateKey = check crypto:decodeRsaPrivateKeyFromKeyStore(keyStore, "keyAlias", "keyPassword");
byte[] signature = check crypto:signRsaSha256(data, privateKey);
crypto:PublicKey publicKey = check crypto:decodeRsaPublicKeyFromTrustStore(keyStore, "keyAlias");
boolean validity = check crypto:verifyRsaSha256Signature(data, signature, publicKey);
```

#### 6.2.4. [RSA-SHA384](#624-rsa-sha384)

This API can be used to verify the RSA-SHA384 based signature.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PrivateKey privateKey = check crypto:decodeRsaPrivateKeyFromKeyStore(keyStore, "keyAlias", "keyPassword");
byte[] signature = check crypto:signRsaSha384(data, privateKey);
crypto:PublicKey publicKey = check crypto:decodeRsaPublicKeyFromTrustStore(keyStore, "keyAlias");
boolean validity = check crypto:verifyRsaSha384Signature(data, signature, publicKey);
```

#### 6.2.5. [RSA-SHA512](#625-rsa-sha512)

This API can be used to verify the RSA-SHA512 based signature.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PrivateKey privateKey = check crypto:decodeRsaPrivateKeyFromKeyStore(keyStore, "keyAlias", "keyPassword");
byte[] signature = check crypto:signRsaSha512(data, privateKey);
crypto:PublicKey publicKey = check crypto:decodeRsaPublicKeyFromTrustStore(keyStore, "keyAlias");
boolean validity = check crypto:verifyRsaSha512Signature(data, signature, publicKey);
```

#### 6.2.6. [SHA384withECDSA](#626-sha384withecdsa)

This API can be used to verify the SHA384withECDSA based signature.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PrivateKey privateKey = check crypto:decodeEcPrivateKeyFromKeyStore(keyStore, "keyAlias", "keyPassword");
byte[] signature = check crypto:signSha384withEcdsa(data, privateKey);
crypto:PublicKey publicKey = check crypto:decodeEcPublicKeyFromTrustStore(keyStore, "keyAlias");
boolean validity = check crypto:verifySha384withEcdsaSignature(data, signature, publicKey);
```

#### 6.2.7. [SHA256withECDSA](#627-sha256withecdsa)

This API can be used to verify the SHA256withECDSA based signature.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PrivateKey privateKey = check crypto:decodeEcPrivateKeyFromKeyStore(keyStore, "keyAlias", "keyPassword");
byte[] signature = check crypto:signSha256withEcdsa(data, privateKey);
crypto:PublicKey publicKey = check crypto:decodeEcPublicKeyFromTrustStore(keyStore, "keyAlias");
boolean validity = check crypto:verifySha256withEcdsaSignature(data, signature, publicKey);
```

#### 6.2.8. [ML-DSA-65](#628-mldsa65)

This API can be used to verify the ML-DSA-65 based signature.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PrivateKey privateKey = check crypto:decodeMlDsa65PrivateKeyFromKeyStore(keyStore, "keyAlias", "keyPassword");
byte[] signature = check crypto:signMlDsa65(data, privateKey);
crypto:PublicKey publicKey = check crypto:decodeMlDsa65PublicKeyFromTrustStore(keyStore, "keyAlias");
boolean validity = check crypto:verifyMlDsa65Signature(data, signature, publicKey);
```


## 7. [Key Derivation Function (KDF)](#7-key-derivation-function-kdf)

The `crypto` module supports HMAC-based Key Derivation Function (HKDF). HKDF is a key derivation function that uses a Hash-based Message Authentication Code (HMAC) to derive keys.

### 7.1. [HKDF-SHA256](#71-hkdf-sha256)

This API can be used to create HKDF using the SHA256 hash function of the given data.

```ballerina
string secret = "some-secret";
byte[] key = secret.toBytes();
byte[] hash = crypto:hkdfSha256(key, 32);
```

## 8. [Key Exchange Mechanism (KEM)](#8-key-exchange-mechanism-kem)

The `crypto` module supports Key Exchange Mechanisms (KEM). It includes RSA-KEM and post-quantum ML-KEM-768 for both encapsulation and decapsulation.

### 8.1. [Encapsulation](#81-encapsulation)
    
#### 8.1.1. [RSA-KEM](#811-rsa-kem)

This API can be used to create shared secret and its encapsulation using RSA-KEM function. 

```ballerina
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PublicKey publicKey = check crypto:decodeRsaPublicKeyFromTrustStore(keyStore, "keyAlias");
crypto:EncapsulationResult encapsulationResult = check crypto:encapsulateRsaKem(publicKey);
```
    
#### 8.1.2. [ML-KEM-768](#812-ml-kem-768)

This API can be used to create shared secret and its encapsulation using ML-KEM-768 function. 

```ballerina
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PublicKey publicKey = check crypto:decodeMlKem768PublicKeyFromTrustStore(keyStore, "keyAlias");
crypto:EncapsulationResult encapsulationResult = check crypto:encapsulateMlKem768(publicKey);
```
    
#### 8.1.3. [RSA-KEM-ML-KEM-768](#813-rsa-kem-ml-kem-768)

This API can be used to create shared secret and its encapsulation using RSA-KEM-ML-KEM-768 function. 

```ballerina
crypto:KeyStore mlkemKeyStore = {
    path: "/path/to/mlkem/keyStore.p12",
    password: "keyStorePassword"
};
crypto:KeyStore rsaKeyStore = {
    path: "/path/to/rsa/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PublicKey mlkemPublicKey = check crypto:decodeMlKem768PublicKeyFromTrustStore(mlkemKeyStore, "keyAlias");
crypto:PublicKey rsaPublicKey = check crypto:decodeRsaPublicKeyFromTrustStore(rsaKeyStore, "keyAlias");
crypto:EncapsulationResult encapsulationResult = check crypto:encapsulateRsaKemMlKem768(rsaPublicKey, mlkemPublicKey);
byte[] encapsulatedSecret = encapsulationResult.encapsulatedSecret;
crypto:PrivateKey mlkemPrivateKey = check crypto:decodeMlKem768PrivateKeyFromKeyStore(mlkemKeyStore, "keyAlias", "keyStorePassword");
crypto:PrivateKey rsaPrivateKey = check crypto:decodeRsaPrivateKeyFromKeyStore(rsaKeyStore, "keyAlias", "keyStorePassword");
byte[] sharedSecret = check crypto:decapsulateRsaKemMlKem768(encapsulatedSecret, rsaPrivateKey, mlkemPrivateKey);
```

### 8.2. [Decapsulation](#81-encapsulation)
    
#### 8.2.1. [RSA-KEM](#821-rsa-kem)

This API can be used to decapsulate shared secret using RSA-KEM function of the given data. 

```ballerina
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PublicKey publicKey = check crypto:decodeRsaPublicKeyFromTrustStore(keyStore, "keyAlias");
crypto:EncapsulationResult encapsulationResult = check crypto:encapsulateRsaKem(publicKey);
byte[] encapsulatedSecret = encapsulationResult.encapsulatedSecret;
crypto:PrivateKey privateKey = check crypto:decodeRsaPrivateKeyFromKeyStore(keyStore, "keyAlias", "keyStorePassword");
byte[] sharedSecret = check crypto:decapsulateRsaKem(encapsulatedSecret, privateKey);
```
    
#### 8.2.2. [ML-KEM-768](#822-ml-kem-768)

This API can be used to decapsulate shared secret using ML-KEM-768 function of the given data. 

```ballerina
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PublicKey publicKey = check crypto:decodeMlKem768PublicKeyFromTrustStore(keyStore, "keyAlias");
crypto:EncapsulationResult encapsulationResult = check crypto:encapsulateMlKem768(publicKey);
byte[] encapsulatedSecret = encapsulationResult.encapsulatedSecret;
crypto:PrivateKey privateKey = check crypto:decodeMlKem768PrivateKeyFromKeyStore(keyStore, "keyAlias", "keyStorePassword");
byte[] sharedSecret = check crypto:decapsulateMlKem768(encapsulatedSecret, privateKey);
```
    
#### 8.2.3. [RSA-KEM-ML-KEM-768](#823-rsa-kem-ml-kem-768)

This API can be used to decapsulate shared secret using RSA-KEM-ML-KEM-768 function of the given data. 

```ballerina
crypto:KeyStore mlkemKeyStore = {
    path: "/path/to/mlkem/keyStore.p12",
    password: "keyStorePassword"
};
crypto:KeyStore rsaKeyStore = {
    path: "/path/to/rsa/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PublicKey mlkemPublicKey = check crypto:decodeMlKem768PublicKeyFromTrustStore(mlkemKeyStore, "keyAlias");
crypto:PublicKey rsaPublicKey = check crypto:decodeRsaPublicKeyFromTrustStore(rsaKeyStore, "keyAlias");
crypto:EncapsulationResult encapsulationResult = check crypto:encapsulateRsaKemMlKem768(rsaPublicKey, mlkemPublicKey);
byte[] encapsulatedSecret = encapsulationResult.encapsulatedSecret;
crypto:PrivateKey mlkemPrivateKey = check crypto:decodeMlKem768PrivateKeyFromKeyStore(mlkemKeyStore, "keyAlias", "keyStorePassword");
crypto:PrivateKey rsaPrivateKey = check crypto:decodeRsaPrivateKeyFromKeyStore(rsaKeyStore, "keyAlias", "keyStorePassword");
byte[] sharedSecret = check crypto:decapsulateRsaKemMlKem768(encapsulatedSecret, rsaPrivateKey, mlkemPrivateKey);
```

## 9. [Hybrid Public Key Encryption (HPKE)](#9-hybrid-public-key-encryption-hpke)

The `crypto` module supports Hybrid Public Key Encryption (HPKE). It supports post-quantum ML-KEM-768-HPKE and RSA-KEM-ML-KEM-768-HPKE for encryption and decryption.

### 9.1. [Encrypt](#91-encrypt)
    
#### 9.1.1. [ML-KEM-768-HPKE](#911-ml-kem-768-hpke)

This API can be used to create the ML-KEM-768-hybrid-encrypted value of the given data.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PublicKey publicKey = check crypto:decodeMlKem768PublicKeyFromTrustStore(keyStore, "keyAlias");
crypto:HybridEncryptionResult encryptionResult = check crypto:encryptMlKem768Hpke(data, publicKey);
```
    
#### 9.1.2. [RSA-KEM-ML-KEM-768-HPKE](#912-rsa-kem-ml-kem-768-hpke)

This API can be used to create the RSA-KEM-ML-KEM-768-hybrid-encrypted value of the given data.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
crypto:KeyStore mlkemKeyStore = {
    path: "/path/to/mlkem/keyStore.p12",
    password: "keyStorePassword"
};
crypto:KeyStore rsaKeyStore = {
    path: "/path/to/rsa/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PublicKey mlkemPublicKey = check crypto:decodeMlKem768PublicKeyFromTrustStore(mlkemKeyStore, "keyAlias");
crypto:PublicKey rsaPublicKey = check crypto:decodeRsaPublicKeyFromTrustStore(rsaKeyStore, "keyAlias");
crypto:HybridEncryptionResult encryptionResult = check crypto:encryptRsaKemMlKem768Hpke(data, rsaPublicKey, mlkemPublicKey);
```

### 9.2. [Decrypt](#92-decrypt)
    
#### 9.2.1. [ML-KEM-768-HPKE](#921-ml-kem-768-hpke)

This API can be used to create the ML-KEM-768-hybrid-decrypted value of the given data.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
crypto:KeyStore keyStore = {
    path: "/path/to/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PublicKey publicKey = check crypto:decodeMlKem768PublicKeyFromTrustStore(keyStore, "keyAlias");
crypto:HybridEncryptionResult encryptionResult = check crypto:encryptMlKem768Hpke(data, publicKey);
byte[] cipherText = encryptionResult.cipherText;
byte[] encapsulatedKey = encryptionResult.encapsulatedSecret;
crypto:PrivateKey privateKey = check crypto:decodeMlKem768PrivateKeyFromKeyStore(keyStore, "keyAlias", "keyStorePassword");
byte[] decryptedData = check crypto:decryptMlKem768Hpke(cipherText, encapsulatedKey, privateKey);
```
    
#### 9.2.2. [RSA-KEM-ML-KEM-768-HPKE](#922-rsa-kem-ml-kem-768-hpke)

This API can be used to create the RSA-KEM-ML-KEM-768-hybrid-decrypted value of the given data.

```ballerina
string input = "Hello Ballerina";
byte[] data = input.toBytes();
crypto:KeyStore mlkemKeyStore = {
    path: "/path/to/mlkem/keyStore.p12",
    password: "keyStorePassword"
};
crypto:KeyStore rsaKeyStore = {
    path: "/path/to/rsa/keyStore.p12",
    password: "keyStorePassword"
};
crypto:PublicKey mlkemPublicKey = check crypto:decodeMlKem768PublicKeyFromTrustStore(mlkemKeyStore, "keyAlias");
crypto:PublicKey rsaPublicKey = check crypto:decodeRsaPublicKeyFromTrustStore(rsaKeyStore, "keyAlias");
crypto:HybridEncryptionResult encryptionResult = check crypto:encryptRsaKemMlKem768Hpke(data, rsaPublicKey, mlkemPublicKey);
byte[] cipherText = encryptionResult.cipherText;
byte[] encapsulatedKey = encryptionResult.encapsulatedSecret;
crypto:PrivateKey mlkemPrivateKey = check crypto:decodeMlKem768PrivateKeyFromKeyStore(mlkemKeyStore, "keyAlias", "keyStorePassword");
crypto:PrivateKey rsaPrivateKey = check crypto:decodeRsaPrivateKeyFromKeyStore(rsaKeyStore, "keyAlias", "keyStorePassword");
byte[] decryptedData = check crypto:decryptRsaKemMlKem768Hpke(cipherText, encapsulatedKey, rsaPrivateKey, mlkemPrivateKey);
```

## 10. [Password Hashing](#10-password-hashing)

The `crypto` module provides password hashing using BCrypt and Argon2id algorithms for secure password storage.

### 10.1 [BCrypt](#101-bcrypt)

Implements the BCrypt password hashing algorithm based on the Blowfish cipher.

```ballerina
public isolated function hashBcrypt(string password, int workFactor = 12) returns string|Error
```

Parameters:
- `password`: The plain text password to hash
- `workFactor`: Computational complexity factor (4-31, default: 12)

```ballerina
public isolated function verifyBcrypt(string password, string hashedPassword) returns boolean|Error
```

Example:
```ballerina
string password = "your-password";
// Hash with default work factor (12)
string hashedPassword1 = check crypto:hashBcrypt(password);
// Hash with custom work factor
string hashedPassword2 = check crypto:hashBcrypt(password, 14);
boolean isValid = check crypto:verifyBcrypt(password, hashedPassword1);
```

### 10.2 [Argon2](#102-argon2)

Implements the Argon2id variant of the Argon2 password hashing algorithm, optimized for both high memory usage and GPU resistance.

```ballerina
public isolated function hashArgon2(string password, int iterations = 3, 
    int memory = 65536, int parallelism = 4) returns string|Error
```

Parameters:
- `password`: The plain text password to hash
- `iterations`: Number of iterations (default: 3)
- `memory`: Memory usage in KB (minimum: 8192, default: 65536)
- `parallelism`: Degree of parallelism (default: 4)

Output hash length is fixed at 256 bits for optimal security and performance.

```ballerina
public isolated function verifyArgon2(string password, string hashedPassword) returns boolean|Error
```

Example:
```ballerina
string password = "your-password";
// Hash with default parameters
string hashedPassword1 = check crypto:hashArgon2(password);
// Hash with custom parameters
string hashedPassword2 = check crypto:hashArgon2(password, iterations = 4, memory = 131072, parallelism = 8);
boolean isValid = check crypto:verifyArgon2(password, hashedPassword1);
```
