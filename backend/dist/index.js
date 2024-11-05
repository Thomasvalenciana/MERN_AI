import app from "./app.js";
//connection and listeners
import { connectToDatabase } from "./db/connection.js";
//connections and listeners
const PORT = process.env.PORT || 5000;
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => console.log("Server Open & Connect to Database 🤟"));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map