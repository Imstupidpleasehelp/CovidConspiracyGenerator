import React from "react";
import Collapsible from "react-collapsible";

export const Why = () => (
  <Collapsible
    className="dropdown"
    openedClassName="opened"
    trigger="Why did I make this?"
    triggerStyle={{ color: "white", fontSize: '2rem', backgroundColor: 'darkcyan', margin: 15  }}
  >
    <p className="opentext">
      Working at a grocery store during the covid crisis I was on the front
      lines of not only being exposed to the virus, but being exposed to the
      latest conspiracy theories as well. So I made this, to illustrate the
      things that I have heard from customers and coworkers over the past few
      months.
    </p>
  </Collapsible>
);
