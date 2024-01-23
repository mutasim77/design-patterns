// Subject interface representing the internet
interface Internet {
    accessWebsite(website: string): void;
}

// RealSubject representing the actual internet
class RealInternet implements Internet {
    accessWebsite(website: string): void {
        console.log(`Accessing website: ${website}`);
    }
}

// Proxy representing a Fortinet-like proxy internet for content filtering
class ProxyInternet implements Internet {
    private realInternet: RealInternet | null = null;
    private restrictedWebsites: Set<string> = new Set<string>();

    addRestrictedWebsite(website: string): void {
        this.restrictedWebsites.add(website);
        console.log(`Website ${website} is restricted.`);
    }

    accessWebsite(website: string): void {
        // Check if the website is restricted
        if (this.restrictedWebsites.has(website)) {
            console.log(`Access to ${website} is denied due to content restrictions.`);
            return;
        }

        // Only access the real internet if the website is not restricted
        if (this.realInternet === null) {
            this.realInternet = new RealInternet();
        }

        this.realInternet.accessWebsite(website);
    }
}


// Usage:
const internetUser: Internet = new ProxyInternet();

// Configuring the proxy internet to restrict access to certain websites
const proxyInternet = internetUser as ProxyInternet;
proxyInternet.addRestrictedWebsite("bad.com"); // Website bad.com is restricted.

// The user accesses the internet through the proxy
internetUser.accessWebsite("example.com"); // Accessing website: example.com
internetUser.accessWebsite("bad.com"); // Access to bad.com is denied due to content restrictions.