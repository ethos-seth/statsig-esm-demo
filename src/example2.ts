
import { Statsig } from "statsig-node";

// ✅ Linter is happy
// ⛔️ Runtime: TypeError: Cannot read properties of undefined (reading 'initialize')
Statsig.initialize("sdk-1234567890");