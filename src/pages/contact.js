import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Section from 'components/Section';
import Container from 'components/Container';

import { useState } from "react";

export default function ContactForm() {
	const [loading, setLoading] = useState(false);

	async function handleSubmit(event) {
		event.preventDefault();
		setLoading(true);

		const data = {
			name: String(event.target.name.value),
			email: String(event.target.email.value),
			message: String(event.target.message.value),
		};

		const response = await fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (response.ok) {
			console.log("Message sent successfully");
			setLoading(false);
			// reset the form
			event.target.name.value = "";
			event.target.email.value = "";
			event.target.message.value = "";
		}
		if (!response.ok) {
			console.log("Error sending message");
			setLoading(false);
		}
	}
	return (
        <Layout>

            <Helmet>
                <title>Who is This Guy?</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <Section>
                <form onSubmit={handleSubmit}>
                    <div className="">
                        <label className="" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            minLength={3}
                            maxLength={150}
                            required
                            className=""
                            autoComplete="off"
                            id="name"
                        />
                    </div>
                    <div className="">
                        <label className="" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            minLength={5}
                            maxLength={150}
                            required
                            className=""
                            autoComplete="off"
                            id="email"
                        />
                    </div>
                    <div>
                        <label className="" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            rows={4}
                            required
                            minLength={10}
                            maxLength={500}
                            name="message"
                            className=" "
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="">
                        Send Message
                    </button>
                </form>
            </Section>

        </Layout>
	);
}