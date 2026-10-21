// api/gemini.js - Fonction Serverless exécutée dans le Cloud Vercel
export default async function handler(req, res) {
    // 1. N'autoriser que les requêtes POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    // 2. Récupérer la clé API stockée en toute sécurité dans l'environnement Vercel
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'Clé API Gemini non configurée sur le serveur' });
    }

    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: 'Message manquant' });
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    try {
        // 3. Appel de serveur à serveur vers Google Gemini (aucun blocage CORS)
        const geminiResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: message }]
                }],
                generationConfig: {
                    systemInstruction: {
                        parts: [{
                            text: "Tu es un tuteur d'IA drôle et pédagogue. Tu aides l'utilisateur à comprendre les concepts d'IA présents dans le jeu de manière simple. Réponds toujours en français."
                        }]
                    }
                }
            })
        });

        if (!geminiResponse.ok) {
            const errDetail = await geminiResponse.text();
            return res.status(geminiResponse.status).json({ error: `Erreur Google: ${errDetail}` });
        }

        const data = await geminiResponse.json();
        const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Pas de réponse reçue.";

        // 4. Renvoyer la réponse propre au jeu
        return res.status(200).json({ reply: responseText });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}