import React, { useState } from "react";
import { List, ListItem } from "@mui/material";

export function ChatList() {
  const [listes, setListes] = useState([
    "Animals",
    "People",
    "Politics",
    "Science",
    "Technic",
  ]);

  return listes.map((list) => (
    <div>
      <List>
        <ListItem>{list}</ListItem>
      </List>
    </div>
  ));
}
