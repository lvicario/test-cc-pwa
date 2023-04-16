import { useEffect, useState } from 'react';
import { Button } from './ui';

const PWAInstallPrompt = () => {
    const [showPrompt, setShowPrompt] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState<any>();

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();

            // Stash the event so it can be triggered later.
            setDeferredPrompt(e);

            // Update UI notify the user they can install the PWA
            setShowPrompt(true)

            // Optionally, send analytics event that PWA install promo was shown.
            console.log(`'beforeinstallprompt' event was fired.`);
        });

        window.addEventListener('appinstalled', () => {
            // Hide the app-provided install promotion
            setShowPrompt(false);

            // Clear the deferredPrompt so it can be garbage collected
            setDeferredPrompt(null);

            // Optionally, send analytics event to indicate successful install
            console.log('PWA was installed');
          });
    }, []);

    const handleInstallClick = async () => {
        // Hide the app provided install promotion
        setShowPrompt(false);

        // Show the install prompt
        deferredPrompt.prompt();
        console.log("deferredPrompt:", deferredPrompt);

        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;

        // Optionally, send analytics event with outcome of user choice
        console.log(`User response to the install prompt: ${outcome}`);

        // We've used the prompt, and can't use it again, throw it away
        setDeferredPrompt(null);
    };

    const handleNotNowClick = () => {
        setShowPrompt(false);
    };

    if (!showPrompt) {
        return null;
    }

    return (
        <div className="mt-4 py-4 px-4 bg-white/60">
            <p className="mb-3 text-sm">Get our free app. It won't take up space on your phone</p>
            <p className="text-right">
                <Button href="#" variant="btn-light" className="w-auto text-primary/75 hover:text-primary bg-transparent border-transparent hover:bg-transparent hover:border-transparent" onClick={handleNotNowClick}>Not now</Button>
                <Button href="#" className="w-auto" onClick={handleInstallClick}>Install</Button>
            </p>
        </div>
    );
};

export default PWAInstallPrompt;
