import React from "react";
import "@/app/globals.css";

const AboutPage = () => {
  return (
    <div className="content-block">
      <div className="text-box">
        <h1>Welcome to the Exchange Platform!</h1>

        <p>
          Looking for a way to trade items you no longer need for something useful?
          Our service is designed for those who value sustainable consumption and
          want to give their items a new purpose.
        </p>

        <h1>How does it work?</h1>

        <h3>"Barter" Section</h3>
        <p>
          In this section, you can browse item cards offered by other users.
          Select the item you want to receive, click the "Exchange" button,
          and choose an item from your inventory to trade.
        </p>

        <h3>Exchange Box and Chat</h3>
        <p>
          Once items are selected, both participants place their cards in the exchange box.
          A chat opens to discuss the details of the trade. Each participant can
          either accept or decline the deal.
        </p>

        <h3>Finalizing the Deal</h3>
        <p>
          If both participants click "Accept," the barter is successfully completed.
          The chat remains available for further communication. You’ll also have the
          opportunity to rate the deal or leave feedback.
        </p>

        <h3>Your Inventory</h3>
        <p>
          The "Inventory" section stores all your items available for exchange.
          Adding a new item is simple: click "Add Item", fill out the required
          details, and save it. All added items are displayed as convenient cards.
        </p>

        <h3>Create Collections</h3>
        <p>
          Group similar items into collections! You can create collections consisting
          of multiple cards. Collections can be expanded and also used for exchanges.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
