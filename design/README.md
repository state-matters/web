# Design System

---

![Color Palette](./Colors.png)

### Usage

```javascript
import { colors } from "constants"

css`
  background: ${colors.purple_500};
`
```

---

![Typography](./Typography.png)

### Usage

```javascript
import { Text, Headline } from "components/typography"

props => (
  <div>
    <Headline size={100}>Hello headline</Headline>
    <Text>Hello world</Text>
  </div>
)
```

---

![User Controls](./Controls.png)
