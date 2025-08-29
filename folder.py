# save as consolidate_home.py at repo root, then run: python consolidate_home.py
from pathlib import Path
import shutil

ROOT = Path.cwd()
SRC = ROOT / "src"
HOME_COMP = SRC / "features" / "home" / "components"

MOVES = [
    ("features/products/components/ProductsSection.jsx", "features/home/components/ProductsSection.jsx"),
    ("features/products/components/ProductsSection.module.css", "features/home/components/ProductsSection.module.css"),
    ("features/trade-finance/components/TradeFinanceCard.jsx", "features/home/components/TradeFinanceCard.jsx"),
    ("features/trade-finance/components/TradeFinanceCard.module.css", "features/home/components/TradeFinanceCard.module.css"),
    ("features/onboarding/pages/CustomerOnboarding1.jsx", "features/home/components/CustomerOnboarding1.jsx"),
    ("features/onboarding/pages/CustomerOnboarding1.module.css", "features/home/components/CustomerOnboarding1.module.css"),
    ("features/onboarding/components/InputDesign.jsx", "features/home/components/InputDesign.jsx"),
    ("features/onboarding/components/InputDesign.module.css", "features/home/components/InputDesign.module.css"),
    ("ui/Footer.jsx", "features/home/components/Footer.jsx"),
    ("ui/Footer.module.css", "features/home/components/Footer.module.css"),
]

def main():
    HOME_COMP.mkdir(parents=True, exist_ok=True)
    for src_rel, dst_rel in MOVES:
        src = SRC / src_rel
        dst = SRC / dst_rel
        if src.exists():
            dst.parent.mkdir(parents=True, exist_ok=True)
            shutil.move(str(src), str(dst))
            print(f"Moved {src_rel} -> {dst_rel}")
        else:
            print(f"Skip (missing): {src_rel}")
    print("Done.")

if __name__ == "__main__":
    main()
