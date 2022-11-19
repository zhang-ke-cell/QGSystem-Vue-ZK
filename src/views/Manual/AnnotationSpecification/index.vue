<template>
<div>
  <div>
    <h2 style="margin-left: 20px">面向任务</h2>
    <p style="margin-left: 40px; line-height: 32px">
      1. 多跳问题生成：根据句子不同部分进行提问 <br>
      2. 多样性问题生成：生成多样的问题 <br>
      3. 难度可控问题生成：给定一段文本、一个答案和指定的难度级别，生成一个流畅且切合文本、答案和指定难度级别的问题。 <br>
      4. 问题评估：根据一个生成的问题，给出相应的得分<br>
      5. 干扰项生成：根据正确答案，生成对应的多选题干扰项<br>
    </p>
  </div>
  <el-divider content-position="left"></el-divider>

  <div>
    <h2 style="margin-left: 20px">数据集形式</h2>
    <p style="margin-left: 40px; line-height: 32px">
      <strong>上下文：</strong><span style="color: red">户籍制度萌芽于商朝</span>，据殷商墟卜辞中记载商朝已经有了征派民力共耕公田的籍田之制。
      战国时期，商鞅将户籍制度发展为“什伍连坐法”。<span style="color: #13ce66">两汉时期，口赋和算赋（人头税）是国家财政的一项主要来源</span>，
      兵役与摇役则是国家要求每个丁男承担的重负，为此，两汉政权一直实行编户齐民制度。编户齐民制度的形成与完善，
      使大量的人丁民户时时处在封建国家政权的直接控制之下……唐安史之乱后，土地兼并风行，政府的财政收入与摇役来源日益枯竭，
      为了解决危机，唐政府改革征税制度，不以户籍及其登记内容而以土地和财产的多寡为征税依据。明洪武年间，
      政府进行了全国范围的土地清丈和地籍整理运动，编制鱼鳞图册，地籍与户籍彼此独立。万历年间，张居正推行一条鞭法，
      使身丁税与户籍相分离。从此地籍便成为统治者征收赋税的主要依据，而户籍的作用则退居其次了。
      <span style="color: blue">清政府下令彻底废除人丁编审，户籍管理制度正式退出历史舞台。</span>——节选自《中国户籍制度的历史考》（394字）
    </p>
    <p style="margin-left: 40px; line-height: 32px">
      <strong>问题1：</strong><span style="color: red">户籍制度萌芽与哪个朝代？</span><br>
      <strong>答案：</strong>商朝<br>
      <strong>干扰项：</strong> A.商朝 B.唐朝 C.宋朝 D.秦朝<br>
    </p>
    <p style="margin-left: 40px; line-height: 32px">
      <strong>问题2：</strong><span style="color: #13ce66">两汉时期口赋和什么是国家财政的一项主要来源？</span><br>
      <strong>答案：</strong>算赋<br>
      <strong>干扰项：</strong>A.房赋 B.地赋 C.算赋 D.人口赋<br>
    </p>
    <p style="margin-left: 40px; line-height: 32px">
      <strong>问题3：</strong><span style="color: blue">户籍管理制度正式退出历史舞台的标志是什么？</span><br>
      <strong>答案：</strong>清政府下令彻底废除人丁编审。<br>
    </p>
  </div>
  <el-divider content-position="left"></el-divider>

  <div>
    <h2 style="margin-left: 20px">标注流程</h2>
    <p style="margin-left: 40px; line-height: 32px">
      1. 对给定的上下文，首先根据上下文标准判断其是否合规，然后修复语病以及多余成分（如：”阅读下列材料回答问题“）。<br>
      2. 然后对于机器生成的问题利用评估标准进行打分。<br>
      3. 然后根据新问题标注规范标注新的问题及答案、干扰项。<br>
    </p>
  </div>
  <el-divider content-position="left"></el-divider>

  <div>
    <h2 style="margin-left: 20px">上下文</h2>
    <p style="margin-left: 40px; line-height: 32px">
      长度在200到400之间（这一点采用自动化处理），修复语病及多余成分。删除不想关的句子。<strong>在上下文中标记问题所提问文本段。</strong>
    </p>
  </div>
  <el-divider content-position="left"></el-divider>

  <div>
    <h2 style="margin-left: 20px">问题</h2>
    <p style="margin-left: 40px; line-height: 32px">
    </p>
  </div>
  <el-divider content-position="left"></el-divider>

  <div>
    <h2 style="margin-left: 20px">答案</h2>
    <p style="margin-left: 40px; line-height: 32px">
    </p>
  </div>
  <el-divider content-position="left"></el-divider>

  <div>
    <h2 style="margin-left: 20px">干扰项</h2>
    <p style="margin-left: 40px; line-height: 32px">
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: "AnnotationSpecification"
}
</script>

<style scoped>

</style>
