---
layout: default
title: Home
---

<section style="padding: 4rem 2rem; background: linear-gradient(to right, #0a2540, #1b4f72); color: white; text-align: center;">
  <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">Automate Your Business</h1>
  <p style="font-size: 1.2rem;">Simplr Automate helps small businesses eliminate repetitive work with powerful, ready-made automation tools.</p>
  <a href="#contact" style="display: inline-block; margin-top: 2rem; padding: 0.75rem 1.5rem; background: white; color: #0a2540; border-radius: 6px; font-weight: bold; text-decoration: none;">Get Started</a>
</section>

<section style="padding: 3rem 2rem; max-width: 900px; margin: auto;">
  <h2>📦 Ready-to-Use Automations</h2>
  <p>From review requests to appointment follow-ups, deploy workflows that save hours every week.</p>
</section>

<section style="padding: 3rem 2rem; background-color: #f6f9fc; max-width: 900px; margin: auto;">
  <h2>📈 Grow Your Reputation</h2>
  <p>Send smart review requests at the right time and track your online feedback effortlessly.</p>
</section>

<section style="padding: 3rem 2rem; max-width: 900px; margin: auto;">
  <h2>🛠️ Services</h2>
  <div class="tab-container">
    <div class="tabs">
      <button class="tab-button active" onclick="openTab(event, 'service1')">Review Automation</button>
      <button class="tab-button" onclick="openTab(event, 'service2')">Follow-ups</button>
      <button class="tab-button" onclick="openTab(event, 'service3')">Custom Automations</button>
    </div>

    <div id="service1" class="tab-content active">
      <p>Automate your review requests post-purchase or service completion.</p>
    </div>
    <div id="service2" class="tab-content">
      <p>Send personalized follow-ups by email or SMS to increase customer retention.</p>
    </div>
    <div id="service3" class="tab-content">
      <p>Custom automations tailored to your business workflows.</p>
    </div>
  </div>
</section>

<section style="padding: 3rem 2rem; background-color: #f6f9fc; max-width: 900px; margin: auto;">
  <h2>💵 Pricing</h2>
  <table>
    <thead>
      <tr><th>Plan</th><th>Description</th><th>Price</th></tr>
    </thead>
    <tbody>
      <tr><td>Starter</td><td>1 automation + email support</td><td>Free (trial)</td></tr>
      <tr><td>Growth</td><td>Up to 3 automations + reporting</td><td>$49/month</td></tr>
      <tr><td>Pro</td><td>Unlimited automations + priority support</td><td>Custom pricing</td></tr>
    </tbody>
  </table>
</section>

<section style="padding: 2rem 2rem; text-align: center;">
  <p>Trusted by forward-thinking local businesses</p>
  <img src="https://via.placeholder.com/600x100?text=Client+Logos" alt="Client Logos" style="margin-top: 1rem; max-width: 100%;">
</section>

<section style="padding: 4rem 2rem; background-color: #0a2540; color: white; text-align: center;" id="contact">
  <h2 style="font-size: 2rem;">Ready to Automate?</h2>
  <p style="margin-bottom: 2rem;">Start your free trial or book a call to see how Simplr Automate can save you time.</p>
  <a href="mailto:simplr.automate@gmail.com" style="background-color: white; color: #0a2540; padding: 0.75rem 1.5rem; text-decoration: none; border-radius: 6px; font-weight: bold;">Get in Touch</a>
</section>

<style>
.tab-container { max-width: 800px; margin: auto; }
.tabs { overflow: auto; white-space: nowrap; border-bottom: 2px solid #007bff; }
.tab-button {
  background: none; border: none; outline: none; cursor: pointer;
  padding: 10px 20px; font-weight: bold; color: #007bff;
}
.tab-button.active { border-bottom: 3px solid #007bff; }
.tab-content { display: none; padding: 20px 0; }
.tab-content.active { display: block; }

table {
  width: 100%; border-collapse: collapse; background-color: white; box-shadow: 0 0 10px rgba(0,0,0,0.05);
}
table th, table td {
  border: 1px solid #ccc; padding: 0.75rem; text-align: left;
}

@media (max-width: 600px) {
  table, thead, tbody, th, td, tr {
    display: block;
  }
  th, td {
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 0.5rem;
    border: none;
    border-bottom: 1px solid #ccc;
  }
  th::before {
    content: attr(data-label);
    font-weight: bold;
  }
}
</style>

<script>
function openTab(evt, tabId) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-button').forEach(el => el.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  evt.currentTarget.classList.add('active');
}
</script>
