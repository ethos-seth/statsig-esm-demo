
import Statsig from "statsig-node";


// ⛔️ lint error: Property 'initialize' does not exist on type 'typeof import...
// ✅ Runtime behavior is correct (Invalid key provided)
Statsig.initialize("sdk-1234567890");