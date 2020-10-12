import { useEffect, useState } from 'react';

const scripts = [];

export default function useScript(src, async = true, defer = true) {

    const [ pending, setPending ] = useState(false);
    const [ loaded, setLoaded ] = useState(false);
    const [ error, setError ] = useState(null);

    function onScriptLoad() {
        setPending(false);
        setLoaded(true);
        setError(null);
    }

    useEffect(() => {

        setPending(true);

        const scriptIndex = scripts.findIndex(script => script.src === src);

        if (scriptIndex !== -1) {

            const script = scripts[scriptIndex];

            const onScriptError = () => {
                setPending(false);
                setLoaded(true);
                setError(true);
            };

            script.addEventListener('load', onScriptLoad);
            script.addEventListener('error', onScriptError);

            return () => {
                script.removeEventListener('load', onScriptLoad);
                script.removeEventListener('error', onScriptError);
            };

        } else {

            const script = document.createElement('script');

            script.src = src;
            script.async = async;
            script.defer = defer;

            scripts.push(script);

            const onScriptError = () => {

                const index = scripts.findIndex(s => s.src === src);

                if (index !== -1) {
                    scripts.splice(index, 1);
                }

                script.remove();

                setPending(false);
                setLoaded(true);
                setError(true);
            };

            script.addEventListener('load', onScriptLoad);
            script.addEventListener('error', onScriptError);

            document.body.appendChild(script);

            return () => {
                script.removeEventListener('load', onScriptLoad);
                script.removeEventListener('error', onScriptError);
            };

        }
    },[src]);

    return [loaded, error, pending];
}