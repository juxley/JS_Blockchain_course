mod minesweeper;
mod random;

use minesweeper::*;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str); // From browser
}

#[wasm_bindgen(js_name = getState )]
pub fn get_state() -> String {
    let ms = Minesweeper::new(10, 10, 5);

    // to_string works due to the Display trait
    // Display automatically implements to_string()

    ms.to_string()
}
