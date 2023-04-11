# Link

The Link component to create link.

```mjml
<mjc-link href="www.sezam.cz" color="seconrady" size="small">Odkaz</mjc-link>
```

## Available props

| Name             | Type                               | Default   | Required | Description      |
| ---------------- | ---------------------------------- | --------- | -------- | ---------------- |
| `color`          | `primary \| secondary \| inverted` | `primary` | no       | Link color       |
| `href`           | `string`                           | -         | yes      | Link to          |
| `padding-bottom` | `unit(px,%)`                       | -         | no       | bottom spacing   |
| `padding-top`    | `unit(px,%)`                       | -         | no       | top spacing      |
| `padding`        | `unit(px){1,4}`                    | -         | no       | spacing          |
| `rel`            | `string`                           | -         | no       |                  |
| `size`           | `small \| medium`                  | `medium`  | no       | Size of the text |
| `target`         | `string`                           | `_blank`  | no       |                  |
