#!/bin/bash
# ============================================================
# ShaneYu 主题 Git 辅助脚本
# 用法: bash git-helper.sh [命令]
# ============================================================

set -euo pipefail

# ======================== 配置区 ========================
# 首次使用请修改以下配置
GIT_USER_NAME="顾子鞍"
GIT_USER_EMAIL="gza5210@163.com"
REMOTE_NAME="origin"
BRANCH="main"
# ======================================================

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

print_info()  { echo -e "${BLUE}[INFO]${NC}  $1"; }
print_ok()    { echo -e "${GREEN}[OK]${NC}    $1"; }
print_warn()  { echo -e "${YELLOW}[WARN]${NC}  $1"; }
print_error() { echo -e "${RED}[ERROR]${NC} $1"; }

show_status() {
  echo ""
  echo -e "${CYAN}========== Git 仓库状态 ==========${NC}"
  git status --short --branch
  echo ""
}

# 配置用户名和邮箱
cmd_config() {
  print_info "配置 Git 用户信息..."
  git config user.name "$GIT_USER_NAME"
  git config user.email "$GIT_USER_EMAIL"
  print_ok "用户名: $GIT_USER_NAME"
  print_ok "邮箱:   $GIT_USER_EMAIL"
  echo ""
  print_info "当前配置验证:"
  echo "  user.name  = $(git config user.name)"
  echo "  user.email = $(git config user.email)"
}

# 添加所有变更并提交
cmd_commit() {
  local msg="${1:-}"
  if [ -z "$msg" ]; then
    echo -n "请输入提交信息: "
    read -r msg
    if [ -z "$msg" ]; then
      msg="update: $(date '+%Y-%m-%d %H:%M:%S')"
      print_warn "未输入信息，使用默认: $msg"
    fi
  fi
  print_info "自动修复格式..."
  npx vp check --fix 2>/dev/null || true
  print_info "添加所有变更到暂存区..."
  git add -A
  print_info "提交: $msg"
  git commit -m "$msg"
  print_ok "提交成功!"
  echo ""
  git log --oneline -3
}

# 推送到远程
cmd_push() {
  print_info "推送到 $REMOTE_NAME/$BRANCH ..."
  git push "$REMOTE_NAME" "$BRANCH"
  print_ok "推送成功!"
}

# 提交并推送
cmd_deploy() {
  local msg="${1:-}"
  if [ -z "$msg" ]; then
    echo -n "请输入提交信息: "
    read -r msg
    if [ -z "$msg" ]; then
      msg="update: $(date '+%Y-%m-%d %H:%M:%S')"
      print_warn "未输入信息，使用默认: $msg"
    fi
  fi
  print_info "自动修复格式..."
  npx vp check --fix 2>/dev/null || true
  print_info "添加所有变更..."
  git add -A
  print_info "提交: $msg"
  git commit -m "$msg"
  print_info "推送到远程..."
  git push "$REMOTE_NAME" "$BRANCH"
  print_ok "提交并推送完成!"
}

# 从远程拉取更新
cmd_pull() {
  print_info "从 $REMOTE_NAME/$BRANCH 拉取更新..."
  git pull "$REMOTE_NAME" "$BRANCH"
  print_ok "更新完成!"
}

# 撤销工作区修改（退回未暂存的修改）
cmd_discard() {
  print_warn "即将撤销工作区所有未暂存的修改，此操作不可恢复!"
  echo -n "确认撤销? (y/N): "
  read -r confirm
  if [[ "$confirm" =~ ^[Yy]$ ]]; then
    git checkout -- .
    git clean -fd
    print_ok "已撤销所有未暂存的修改"
  else
    print_info "已取消"
  fi
}

# 回退最近一次提交（保留修改在暂存区）
cmd_undo_commit() {
  print_warn "即将回退最近一次提交（修改保留在暂存区）"
  echo -n "确认回退? (y/N): "
  read -r confirm
  if [[ "$confirm" =~ ^[Yy]$ ]]; then
    git reset --soft HEAD~1
    print_ok "已回退最近一次提交，修改保留在暂存区"
    show_status
  else
    print_info "已取消"
  fi
}

# 回退到指定提交（保留修改在工作区）
cmd_reset_soft() {
  local target="${1:-HEAD~1}"
  print_warn "即将软重置到: $target（修改保留在工作区）"
  echo -n "确认回退? (y/N): "
  read -r confirm
  if [[ "$confirm" =~ ^[Yy]$ ]]; then
    git reset "$target"
    print_ok "已软重置到 $target"
    show_status
  else
    print_info "已取消"
  fi
}

# 强制回退到指定提交（丢弃所有修改，危险操作）
cmd_reset_hard() {
  local target="${1:-HEAD~1}"
  print_error "即将硬重置到: $target（所有修改将丢失，不可恢复!）"
  echo -n "确认强制回退? 输入 'YES' 确认: "
  read -r confirm
  if [ "$confirm" = "YES" ]; then
    git reset --hard "$target"
    print_ok "已强制重置到 $target"
    show_status
  else
    print_info "已取消"
  fi
}

# 查看提交历史
cmd_log() {
  local count="${1:-10}"
  echo ""
  echo -e "${CYAN}========== 最近 $count 条提交记录 ==========${NC}"
  git log --oneline --graph -"$count"
  echo ""
}

# 查看差异
cmd_diff() {
  echo ""
  echo -e "${CYAN}========== 未暂存的修改 ==========${NC}"
  git diff
  echo ""
  echo -e "${CYAN}========== 已暂存的修改 ==========${NC}"
  git diff --cached
  echo ""
}

# 查看分支
cmd_branch() {
  echo ""
  echo -e "${CYAN}========== 分支信息 ==========${NC}"
  echo "当前分支: $(git branch --show-current)"
  echo ""
  echo "所有分支:"
  git branch -a
  echo ""
}

# 显示帮助
show_help() {
  echo ""
  echo -e "${CYAN}================================================${NC}"
  echo -e "${CYAN}  ShaneYu 主题 Git 辅助脚本${NC}"
  echo -e "${CYAN}================================================${NC}"
  echo ""
  echo "  用法: bash git-helper.sh <命令> [参数]"
  echo ""
  echo -e "${GREEN}基础操作:${NC}"
  echo "  config              配置用户名和邮箱"
  echo "  status              查看仓库状态"
  echo "  commit [信息]       添加所有文件并提交"
  echo "  push                推送到远程仓库"
  echo "  deploy [信息]       提交并推送（一步到位）"
  echo "  pull                从远程拉取更新"
  echo ""
  echo -e "${YELLOW}退回操作:${NC}"
  echo "  discard             撤销工作区未暂存的修改"
  echo "  undo                回退最近一次提交（保留修改）"
  echo "  soft [目标]         软重置到指定提交（默认 HEAD~1）"
  echo "  hard [目标]         硬重置到指定提交（丢弃修改，慎用）"
  echo ""
  echo -e "${BLUE}查看操作:${NC}"
  echo "  log [数量]          查看提交历史（默认 10 条）"
  echo "  diff                查看已暂存和未暂存的差异"
  echo "  branch              查看分支信息"
  echo ""
  echo -e "${GREEN}快捷示例:${NC}"
  echo "  bash git-helper.sh commit \"修复侧边栏样式\""
  echo "  bash git-helper.sh deploy \"新增文章列表功能\""
  echo "  bash git-helper.sh hard HEAD~2"
  echo ""
}

# ======================== 主入口 ========================
case "${1:-}" in
  config)       cmd_config ;;
  status|st)    show_status ;;
  commit)       cmd_commit "${2:-}" ;;
  push)         cmd_push ;;
  deploy|dp)    cmd_deploy "${2:-}" ;;
  pull|update)  cmd_pull ;;
  discard)      cmd_discard ;;
  undo)         cmd_undo_commit ;;
  soft)         cmd_reset_soft "${2:-HEAD~1}" ;;
  hard)         cmd_reset_hard "${2:-HEAD~1}" ;;
  log)          cmd_log "${2:-10}" ;;
  diff)         cmd_diff ;;
  branch)       cmd_branch ;;
  help|-h|--help|"")  show_help ;;
  *)
    print_error "未知命令: $1"
    show_help
    exit 1
    ;;
esac
